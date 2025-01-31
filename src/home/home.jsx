import React from 'react';
import './home.css';

export function Home() {
    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2>Random Choice Maker</h2>
            <p>3rd party api call will be used to get color pallette for wheel</p>
            <div id="wheel" className="wheel-container my-4 mx-auto">
                <div className="option" style={{'--i': 1}}>Option1</div>
                <div className="option" style={{'--i': 2}}>Option2</div>
                <div className="option" style={{'--i': 3}}>Option3</div>
                <div className="option" style={{'--i': 4}}>Option4</div>
            </div>
            <button id="spin" className="btn btn-primary btn-lg mb-4 mx-auto">Spin</button>
            <div className="d-none d-md-block position-absolute end-0 mt-2">
                <h6>Other Spinners</h6>
                <div id="other-spinners" className="overflow-hidden me-4">
                    <div className="text-secondary">Cosmo spun cougar blue</div>
                    <div className="text-secondary">Cosmo spun cougar blue</div>
                    <div className="text-secondary">Cosmo spun cougar blue</div>
                    <div className="text-secondary">Cosmo spun cougar blue</div>
                    <div className="text-secondary">Cosmo spun cougar blue</div>
                </div>
            </div>
        </main>
    );
}
