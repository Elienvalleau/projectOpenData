// Dependencies
const express = require('express');
var CKAN = require('ckan');
const router = express.Router();

var clientCkan = new CKAN.Client('http://35.197.231.222/dataset/projettgv');
clientCkan.requestType = 'GET';

console.log(clientCkan);

// -------------------------------------------------- Home
router.get('/', (req, res) => {
    res.render('home', { name: "test" });
});


module.exports = router;