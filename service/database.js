const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const usersCollection = db.collection('users');
const wheelsCollection = db.collection('wheels');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connect to database`);
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

async function findUser(field, value) {
    if (!value) return null;
    const query = {};
    query[field] = value;
    return usersCollection.findOne(query);
}

async function addUser(user) {
    await usersCollection.insertOne(user);
}

async function updateUser(user) {
    await usersCollection.updateOne({ email: user.email }, { $set: user });
}

async function findUserWheels(email) {
    return wheelsCollection.findOne({ email });
}

async function updateUserWheels(email, wheel) {
    if (findUserWheels(email)) {
        await wheelsCollection.updateOne({ email }, { $push: { wheels: wheel } });
    } else {
        await wheelsCollection.insertOne({ email, wheels: [wheel] });
    }
}

module.exports = {
    findUser,
    addUser,
    updateUser,
    findUserWheels,
    updateUserWheels,
};
