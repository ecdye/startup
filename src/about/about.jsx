import React from 'react';

export function About() {
    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2>About</h2>
            <p>This whole website came from a super simple idea. There is even proof, here is the super simple sketch that started it all!</p>
            <img src="DesignDrawing.jpg" className="rounded mx-auto d-block w-75 mb-4" alt="Simple sketch of a wheel spinner website" />
        </main>
    );
}
