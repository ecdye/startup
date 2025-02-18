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
        console.log('Report this result to the server:', options[randomIndex]);
    };

    function getPaletteColors() {
        // Use 3rd party library for color palette generation
        const palette = [
            '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ];
        const shuffledPalette = palette.sort(() => 0.5 - Math.random());
        return shuffledPalette.slice(0, options.length);
    }

    const [paletteColors] = useState(getPaletteColors());


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
                            style={{ '--i': index + 1, '--num-spots': options.length, '--color': paletteColors[index] }}
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
            <Button variant="primary" size="lg" className="lessWidth mb-4" onClick={spinWheel} disabled={spinning}>
                {spinning ? 'Spinning...' : 'Spin'}
            </Button>
            {selectedOption && <div className="result">Selected: {selectedOption}</div>}
        </>
    );
}
