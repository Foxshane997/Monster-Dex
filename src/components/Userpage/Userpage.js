import React from 'react';
import './UserPage.css';

const UserPage = ({ user }) => {
    const userData = user || {
        username: 'Guest',
        email: 'guest@example.com',
        favoritePokemons: [],
    };
    console.log("user data", user)
    return (
        <div className="user-page">
            <h1 className="user-title">User Profile</h1>
            <div className="user-details">
                <h2>Username: {userData.username}</h2>
                <p>Email: {userData.email}</p>
                <h3>Favorite Pokémon:</h3>
                {Array.isArray(userData.favoritePokemons) && userData.favoritePokemons.length > 0 ? (
                    <ul>
                        {userData.favoritePokemons.map((pokemon, index) => (
                            <li key={index}>{pokemon}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No favorite Pokémon added.</p>
                )}
                {/* Add more user data fields here */}
            </div>
        </div>
    );
};

export default UserPage;
