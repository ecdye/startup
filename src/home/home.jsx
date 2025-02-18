import React from 'react';
import { Wheel } from '../components/Wheel';
import { Button } from 'react-bootstrap';
import { AuthState } from '../login/authState';

export function Home({ userName, authState }) {
    const [options, setOptions] = React.useState(() => {
        const savedOptions = localStorage.getItem('options');
        return savedOptions ? JSON.parse(savedOptions) : ['Option1', 'Option2', 'Option3', 'Option4'];
    });
    const [wheelName, setWheelName] = React.useState('');

    const handleOptionChange = (index, newValue) => {
        const newOptions = [...options];
        newOptions[index] = newValue;
        setOptions(newOptions);
        localStorage.setItem('options', JSON.stringify(newOptions));
    };

    const [optionsDisplayClass, setOptionsDisplayClass] = React.useState(() => {
        return window.innerWidth > 768 ? 'option-editor d-block position-absolute start-2 mt-2'
            : 'option-editor d-block mt-4 mx-auto';
    });

    React.useEffect(() => {
        const handleResize = () => {
            setOptionsDisplayClass(window.innerWidth > 768 ? 'option-editor d-block position-absolute start-2 mt-2'
                : 'option-editor d-block mt-4 mx-auto');
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function saveSpinner() {
        const userSpinners = JSON.parse(localStorage.getItem(userName)) || [];
        userSpinners.push({ name: wheelName, options });
        localStorage.setItem(userName, JSON.stringify(userSpinners));
    }

    (setInterval(() => console.log('New external spins'), 5000))
    return (
        <main className="spinner-light container-fluid d-flex flex-column flex-grow-1">
            <h2 className='mx-auto'>Random Choice Maker</h2>
            <Wheel options={options} />
            <div className={optionsDisplayClass}>
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
                {authState === AuthState.Authenticated && (
                    <form className="col">
                        <div className="row ms-2 mb-2">
                            <input type="text" placeholder="Enter Name of Wheel" onChange={(e) => setWheelName(e.target.value)} />
                        </div>
                        <Button variant="primary" size="sm" className='ms-2' onClick={saveSpinner}>Save Spinner</Button>
                    </form>
                )}
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
