const routes = require('./routes/index');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;