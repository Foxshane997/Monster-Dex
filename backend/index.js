const express = require('express');
const connectDB = require('./db');
const favoritesRoutes = require('./routes/favorites');
const app = express();

require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Use favorites routes
app.use('/favorites', favoritesRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
