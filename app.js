const express = require('express');
const Auth = require('./api/routes/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', Auth);
module.exports = app;
