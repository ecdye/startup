import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './app.css';

export default function App() {
	return <div className='d-flex flex-column vh-100'>
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
                                <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about.html">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Login / USERNAME PLACEHOLDER</a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="/login.html">Login</a></li>
                                  <li><hr className="dropdown-divider"/></li>
                                  <li><a className="dropdown-item disabled" href="/history.html">History</a></li>
                                </ul>
                            </li>
                        </ul>
                    </menu>
                </div>
            </nav>
        </header>

		<main className="spinner-light container-fluid d-flex flex-column flex-grow-1">App components go here</main>

		<footer className="spinner-dark text-light sticky-bottom p-2">
            <div className="d-flex fw-bold align-items-center justify-content-between">
                <p className="mb-0">&copy; 2025 Ethan Dye</p>
                <a className="btn btn-outline-primary spinner-accent" href="https://github.com/ecdye/startup"><i className="bi bi-github"></i> Source</a>
            </div>
        </footer>
	</div>;
}
