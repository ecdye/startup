import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Wheel.css';

export function Wheel({ options }) {
    const [spinning, setSpinning] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [rotation, setRotation] = useState(0);

    const spinWheel = () => {
        setSpinning(true);
        const randomIndex = Math.floor(Math.random() * options.length);
        const newRotation = rotation + 360 * 5 + (360 / options.length) * randomIndex;
        setRotation(newRotation);
        setTimeout(() => {
            setSelectedOption(options[randomIndex]);
            setSpinning(false);
        }, 3000); // Spin duration
    };

    return (
        <>
            <div
                className={`wheel-container my-4 mx-auto ${spinning ? 'spinning' : ''}`}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {options.map((option, index) => (
                    <React.Fragment key={index}>
                        <div
                            className="option"
                            style={{ '--i': index + 1, '--num-spots': options.length }}
                        />
                        <div
                            className="option-label"
                            style={{ '--i': index + 1, '--num-spots': options.length }}
                        >
                            {option}
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <Button variant="primary" size="lg" className="lessWidth" onClick={spinWheel} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin'}
            </Button>
            {selectedOption && <div className="result">Selected: {selectedOption}</div>}
        </>
    );
}
