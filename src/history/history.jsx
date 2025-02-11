import React from 'react';
import { AuthState } from '../login/authState';
import { ListGroup } from 'react-bootstrap';

export function History({ userName, authState }) {
    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            {(authState === AuthState.Unauthenticated || authState === AuthState.Unknown) && (
                <>
                    <h2>Login to view your history</h2>
                    <p>Please login to see your history.</p>
                </>
            )}
            {(authState === AuthState.Authenticated) && (
                <>
                    <h2>Your History</h2>
                    <p>Here are your previous spins:</p>
                    <ListGroup as="ul">
                        <ListGroup.Item action href="#link1">PLACEHOLDER Wheel</ListGroup.Item>
                    </ListGroup>
                </>
            )}
        </main>
    );
}
