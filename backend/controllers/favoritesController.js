const FavoritePokemon = require('../models/favoritePokemon');

// Add a favorite Pokémon
const addFavorite = async (req, res) => {
    try {
        const { userId, name } = req.body; // Ensure both fields are being extracted
        const newFavorite = new FavoritePokemon({ userId, name });
        await newFavorite.save(); // Attempt to save the document
        res.status(201).json(newFavorite); // Respond with the saved document
    } catch (error) {
        console.error('Error adding favorite Pokémon:', error); // Log the error to the console for troubleshooting
        res.status(500).json({ message: 'Error adding favorite Pokémon', error });
    }
};

// Get all favorite Pokémon
const getFavorites = async (req, res) => {
    try {
        const favorites = await FavoritePokemon.find();
        res.status(200).json(favorites);
    } catch (error) {
        console.error('Error fetching favorite Pokémon:', error);
        res.status(500).json({ message: 'Error fetching favorite Pokémon', error });
    }
};

module.exports = {
    addFavorite,
    getFavorites
};
        