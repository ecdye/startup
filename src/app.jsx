import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './app.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { History } from './history/history';
import { About } from './about/about';

export default function App() {
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
                                    <NavDropdown title="Login / USERNAME PLACEHOLDER" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={NavLink} to='/login'>Login</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item as={NavLink} to='/history'>History</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </header>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/history' element={<History />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="spinner-dark text-light sticky-bottom p-2">
                    <div className="d-flex fw-bold align-items-center justify-content-between">
                        <p className="mb-0">&copy; 2025 Ethan Dye</p>
                        <a className="btn btn-outline-primary spinner-accent" href="https://github.com/ecdye/startup"><i className="bi bi-github"></i> Source</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
