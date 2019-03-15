// Dependencies

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
var hbs = require('express-hbs');

// Express initialisation
const app = express();

app.use(express.static('public'));

hbs.registerHelper('ifSup', function(v1, v2, options) {
	if(v1 > v2) {
		return options.fn(this);
	}
	return options.inverse(this);
});


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
app.use('/', require('./routes/data'));

// -------------------------------------------------- Start Server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT} ...`);
});