// Require modules & functions
const express = require('express');
const sequelize = require('./config/connection');

// Configuration Data
const PORT = process.env.PORT || 3001;

// Set up server
const app = express();
app.use(express.json());

// Synchronise database and start server on success.
sequelize.sync({ force: false }).then(async () => {
    app.listen(PORT);
});