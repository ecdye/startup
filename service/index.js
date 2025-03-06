const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    try {
        if (await DB.findUser('email', req.body.email)) {
            res.status(409).send({ msg: 'Existing user' });
        } else {
            const user = await createUser(req.body.email, req.body.password);
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ msg: 'Internal server error' });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    try {
        const user = await DB.findUser('email', req.body.email);
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
        } else {
            res.status(401).send({ msg: 'Unauthorized' });
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send({ msg: 'Internal server error' });
    }
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await DB.findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await DB.findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

apiRouter.get('/wheels', verifyAuth, async (req, res) => {
    const user = await DB.findUser('token', req.cookies[authCookieName]);
    res.send(await DB.findUserWheels(user.email));
});

apiRouter.post('/wheels', verifyAuth, async (req, res) => {
    const user = await DB.findUser('token', req.cookies[authCookieName]);
    await DB.updateUserWheels(user.email, req.body);
    res.send(await DB.findUserWheels(user.email));
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await DB.addUser(user);

    return user;
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
