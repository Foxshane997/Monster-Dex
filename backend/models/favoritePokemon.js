const mongoose = require('mongoose');

const FavoritePokemonSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
});

const FavoritePokemon = mongoose.model('favoritePokemon', FavoritePokemonSchema);

module.exports = FavoritePokemon;
