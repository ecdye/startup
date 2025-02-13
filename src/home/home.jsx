import React from 'react';
import { Wheel } from '../components/Wheel';
// import './home.css';

export function Home() {
    const [options, setOptions] = React.useState(() => {
        const savedOptions = localStorage.getItem('options');
        return savedOptions ? JSON.parse(savedOptions) : ['Option1', 'Option2', 'Option3', 'Option4'];
    });

    const handleOptionChange = (index, newValue) => {
        const newOptions = [...options];
        newOptions[index] = newValue;
        setOptions(newOptions);
        localStorage.setItem('options', JSON.stringify(newOptions));
    };

    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2>Random Choice Maker</h2>
            <p>3rd party api call will be used to get color pallette for wheel</p>
            <Wheel options={options} />
            <div className="option-editor mt-0">
                <h4>Edit Options</h4>
                <ul>
                    {options.map((option, index) => (
                        <li key={index}>
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
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
