import React from 'react';

export function Login() {
    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2>Welcome to Wheel Spinner - Random Choice Maker</h2>

            <p>To gain access to history features, please login:</p>

            <form method="get" action="/history.html" className="col mx-auto">
                <div className="row">
                    <label>Email:<span className="text-danger">*</span></label>
                    <div className="input-group">
                        <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                        <input type="text" className="form-control" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="row">
                    <label>Password:<span className="text-danger">*</span></label>
                    <div className="input-group">
                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>
                </div>
                <div className="d-grid mt-4 gap-2">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Create Account</button>
                </div>
            </form>
        </main>
    );
}
