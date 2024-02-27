const express = require('express');
const app = express();
const routes = require('./routes')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connection = process.env.URI;

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(connection);
        connectionStatus = "The database has been connected!!";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "Failed to connect to database";
    }
};

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "Database disconnected";
};

app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.get("/ping", (req, res) => {
    res.send('Hello');
});

app.use('/',routes)

app.listen(3000, () => {
    startDatabase();
    console.log('Port 3000');
});

module.exports = app;