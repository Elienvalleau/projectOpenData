// Dependencies
const express = require('express');
//var CKAN = require('ckan');
const router = express.Router();
const axios = require('axios');

//var clientCkan = new CKAN.Client('http://35.197.231.222/dataset/projettgv');
//clientCkan.requestType = 'GET';


router.get('/data', (req, res) => {
    axios.get('http://35.197.231.222/dataset/b71ed655-de8b-4dd0-afcf-c92aadf780a0/resource/6051abab-a64d-4ce1-b44d-a9f86ea748d5/download/regularite-mensuelle-tgv-aqst.json').
    then(result => {
        var gare1 = req.query.gare1;
        var gare2 = req.query.gare2;
        res.render('data', { data: result.data, gare1: gare1, gare2: gare2 });
    })
});

module.exports = router;