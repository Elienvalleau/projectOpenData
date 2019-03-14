// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-hbs');

// Express initialisation
const app = express();

app.use(express.static('public'));

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views'
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// ------------------------------------------------ Middlewares
app.use(bodyParser.json({
	limit: '500mb',
}));

app.use(bodyParser.urlencoded({
	extended: true,
	limit: '500mb',
	parameterLimit: 1000000,
}));

// ----------------------------------------- Log les requêtes (development)
app.use(morgan('dev'));

// Routes
app.use('/', require('./routes/home'));

// -------------------------------------------------- Start Server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT} ...`);
});