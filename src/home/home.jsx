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
