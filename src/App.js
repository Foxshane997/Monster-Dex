import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../src/components/NavBar/NavBar';
import PokemonSearch from '../src/components/PokemonSearch/PokemonSearch';
import PokeHome from '../src/components/Home/PokeHome';
import LandingPage from '../src/components/LandingPage/LandingPage';
import PokeDisplay from './components/PokeDisplay/PokeDisplay';

const App = () => {
    const [isEntered, setIsEntered] = useState(false);

    const handleEnter = () => {
        setIsEntered(true);
    };

    return (
        <Router>
            {!isEntered ? (
                <LandingPage onEnter={handleEnter} />
            ) : (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PokeHome />} />
                        <Route path="/search" element={<PokemonSearch />} />
                        <Route path="/pokemon/:name" element={<PokeDisplay />} /> 
                        {/* <Route path="/user" element={<User />} /> */}
                    </Routes>
                </>
            )}
        </Router>
    );
};

export default App;
