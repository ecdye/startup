import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './app.css';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { History } from './history/history';
import { About } from './about/about';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const [userNameLog, setUserNameLog] = React.useState(localStorage.getItem('userNameLog') || '');
    const currentAuthState = userNameLog ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const onAuthChange = (newUserName, newAuthState) => {
        if (newAuthState === AuthState.Unauthenticated) {
            fetch(`/api/auth/logout`, {
                method: 'delete',
            })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userNameLog');
            });
        } else {
            localStorage.setItem('userName', newUserName);
            localStorage.setItem('userNameLog', newUserName);
            setUserNameLog(newUserName);
        }
        setUserName(newUserName);
        setAuthState(newAuthState);
    };

    return (
        <BrowserRouter>
            <div className="d-flex flex-column vh-100">
                <header className="sticky-top">
                    <Navbar className="spinner-dark" variant="dark" expand="lg">
                        <div className="container-fluid">
                            <Navbar.Brand href="#">Wheel Spinner</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarSupportedContent" />
                            <Navbar.Collapse id="navbarSupportedContent">
                                <Nav className="ms-auto">
                                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                                    <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                                    {authState === AuthState.Authenticated && (
                                        <NavDropdown title={userName} align="end" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={NavLink} to='/login'>Account</NavDropdown.Item>
                                            <NavDropdown.Item as={NavLink} to='/history'>History</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item as={NavLink} onClick={() => onAuthChange('', AuthState.Unauthenticated)} to=''>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    )}
                                    {(authState === AuthState.Unauthenticated || authState === AuthState.Unknown) && (
                                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </header>

                <Routes>
                    <Route path='/' element={
                        <Home
                            userName={userName}
                            authState={authState}
                        />
                    } exact />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => onAuthChange(userName, authState)}
                        />
                        } />
                    <Route path='/history' element={
                        <History
                            userName={userName}
                            authState={authState}
                        />
                    } />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="spinner-dark text-light sticky-bottom p-2">
                    <div className="d-flex fw-bold align-items-center justify-content-between">
                        <p className="mb-0">&copy; 2025 Ethan Dye</p>
                        <Button variant="outline-primary" className="spinner-accent" href="https://github.com/ecdye/startup">
                            <i className="bi bi-github"></i> Source
                        </Button>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main className='spinner-light container-fluid d-flex flex-column flex-grow-1 justify-content-center align-items-center'>
            <h1>404: Return to sender. Address unknown.</h1>
        </main>
    );
}
