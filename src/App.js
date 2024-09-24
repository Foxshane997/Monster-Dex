import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from '../src/components/NavBar/NavBar';
import PokemonSearch from '../src/components/PokemonSearch/PokemonSearch';
import PokeHome from '../src/components/Home/PokeHome';
import PokeDisplay from '../src/components/PokeDisplay/PokeDisplay';
import LandingPage from '../src/components/LandingPage/LandingPage';
import UserPage from '../src/components/Userpage/Userpage';

const AppContent = () => {
    const [isEntered, setIsEntered] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleEnter = () => {
        setUser({ username: 'JohnDoe', email: 'john@example.com' });
        setIsEntered(true);
        navigate('/');
    };

    return (
        <>
            {!isEntered ? (
                <LandingPage onEnter={handleEnter} user={user} />
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokeHome user={user} />} />
                        <Route path="/search" element={<PokemonSearch />} />
                        <Route path="/user" element={<UserPage user={user} />} />
                        <Route path="/pokemon/:name" element={<PokeDisplay />} />
                    </Routes>
                </>
            )}
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
