import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(onEnter, 600);
    };

    return (
        <div className={`landing-container ${isActive ? 'active' : ''}`}>
            <div className="panel left-panel">
                <div className="content">
                    <h1>Welcome to Monster Dex!</h1>
                    <button className="enter-button" onClick={handleClick}>
                        Enter
                    </button>
                </div>
            </div>
            <div className="panel right-panel"></div>
        </div>
    );
};

export default LandingPage;
