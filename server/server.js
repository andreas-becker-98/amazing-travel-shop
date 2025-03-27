// Require modules & functions
const express = require('express');
const sequelize = require('./config/connection');
const cors = require("cors");

// Configuration Data
const PORT = process.env.PORT || 3001;

// Set up server
const app = express();
app.use(express.json());

app.use(cors());

// Include routes
const routes = require('./routes');
app.use(routes);

// Synchronise database and start server on success.
sequelize.sync({ force: false }).then(async () => {
    app.listen(PORT);
});