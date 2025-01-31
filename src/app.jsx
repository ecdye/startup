import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './app.css';
import { Popover } from 'bootstrap';
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
                    <nav className="navbar spinner-dark navbar-dark navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Wheel Spinner</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <menu className="collapse navbar-collapse my-0" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='/'>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='about'>About</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Login / USERNAME PLACEHOLDER</a>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className='dropdown-item' to='login'>Login</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink className='dropdown-item' to='history'>History</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </menu>
                        </div>
                    </nav>
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
