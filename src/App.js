import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../src/components/NavBar/NavBar';

import PokemonSearch from '../src/components/PokemonSearch/PokemonSearch';
import PokeHome from '../src/components/Home/PokeHome';
import LandingPage from '../src/components/LandingPage/LandingPage';
import PokeDisplay from '../src/components/PokeDisplay/PokeDisplay';

const AppContent = () => {
    const [isEntered, setIsEntered] = useState(false);
    const navigate = useNavigate();

    const handleEnter = () => {
        setIsEntered(true);
        navigate('/');
    };

    return (
        <>
            {!isEntered ? (
                <LandingPage onEnter={handleEnter} />
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokeHome />} />
                        <Route path="/search" element={<PokemonSearch />} />
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
