// Dependencies
const express = require('express');
var CKAN = require('ckan');
const router = express.Router();

var clientCkan = new CKAN.Client('http://35.197.231.222/dataset/projettgv');
clientCkan.requestType = 'GET';



router.get('/data', (req, res) => {
    axios.get('http://35.197.231.222/dataset/b71ed655-de8b-4dd0-afcf-c92aadf780a0/resource/6051abab-a64d-4ce1-b44d-a9f86ea748d5/download/regularite-mensuelle-tgv-aqst.json').then(res => {
        res.render('data', { data: res.data })
    })
})

module.exports = router;