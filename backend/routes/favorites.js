const express = require('express');
const { addFavorite, getFavorites } = require('../controllers/favoritesController');
const router = express.Router();

// Add a favorite Pokémon
router.post('/', addFavorite); // Handle POST requests to add favorites

// Get all favorite Pokémon
router.get('/', getFavorites); // Handle GET requests to retrieve favorites

module.exports = router;
