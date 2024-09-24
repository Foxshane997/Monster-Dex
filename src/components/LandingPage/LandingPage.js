import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter, user }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        setTimeout(onEnter, 600); // Call onEnter after a delay to allow state to update
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
            <div className="panel right-panel">
                {user ? (
                    <div className="user-info">
                        <h2>User Details</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <div className="user-info">
                        <h2>No User Signed In</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;
