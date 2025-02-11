import React from 'react';
import { Wheel } from '../components/Wheel';
// import './home.css';

export function Home() {
    const options = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5', 'Option6', 'Option7', 'Option8', 'Option9', 'Option10'];

    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2>Random Choice Maker</h2>
            <p>3rd party api call will be used to get color pallette for wheel</p>
            <Wheel options={options} />
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
