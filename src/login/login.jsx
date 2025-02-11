import React from 'react';
import { Button } from 'react-bootstrap';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    const [loginUserName, setUserName] = React.useState(userName);
    const [loginPassword, setPassword] = React.useState('');

    async function loginUser() {
        localStorage.setItem('userName', loginUserName);
        onAuthChange(loginUserName, AuthState.Authenticated);
    }

    async function createUser() {
        localStorage.setItem('userName', loginUserName);
        onAuthChange(loginUserName, AuthState.Authenticated);
    }

    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            {(authState === AuthState.Unauthenticated || authState === AuthState.Unknown) ? (
                <>
                    <h2>Welcome to Wheel Spinner - Random Choice Maker</h2>

                    <p>To gain access to history features, please login:</p>

                    <form className="col mx-auto">
                        <div className="row">
                            <label>Email:<span className="text-danger">*</span></label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                <input type="text" className="form-control" placeholder="Enter Email" value={loginUserName} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <label>Password:<span className="text-danger">*</span></label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="d-grid mt-4 gap-2">
                            <Button type="submit" variant="primary" onClick={() => loginUser()} disabled={!loginUserName || !loginPassword}>Login</Button>
                            <Button type="submit" variant="secondary" onClick={() => createUser()} disabled={!loginUserName || !loginPassword}>Create Account</Button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <h2>Welcome back, {userName}!</h2>
                    <Button variant="primary" onClick={() => onAuthChange('', AuthState.Unauthenticated)}>Logout</Button>
                </>
            )}
        </main>
    );
}
