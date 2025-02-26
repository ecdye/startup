import React from 'react';
import { Button } from 'react-bootstrap';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    const [loginUserName, setUserName] = React.useState(userName);
    const [loginPassword, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    async function loginOrCreate(endpoint) {
        try {
            const response = await fetch(endpoint, {
                method: 'post',
                body: JSON.stringify({ email: loginUserName, password: loginPassword }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.status === 200) {
                localStorage.setItem('userName', loginUserName);
                onAuthChange(loginUserName, AuthState.Authenticated);
            } else {
                const body = await response.json();
                setErrorMessage(`⚠ Error: ${body.msg}`);
            }
        } catch (error) {
            setErrorMessage(`⚠ Error: ${error.message}`);
        }
    }

    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            {(authState === AuthState.Unauthenticated || authState === AuthState.Unknown) ? (
                <>
                    <h2>Welcome to Wheel Spinner - Random Choice Maker</h2>

                    <p>To gain access to history features, please login:</p>

                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

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
                        <div className="d-grid mt-4 gap-2 mb-2">
                            <Button type="button" variant="primary" onClick={() => loginOrCreate('/api/auth/login')} disabled={!loginUserName || !loginPassword}>Login</Button>
                            <Button type="button" variant="secondary" onClick={() => loginOrCreate('/api/auth/create')} disabled={!loginUserName || !loginPassword}>Create Account</Button>
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
