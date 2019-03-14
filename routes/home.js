// Dependencies
const express = require('express');
const router = express.Router();

// -------------------------------------------------- Home
router.get('/', (req, res) => {
    res.render('home');
});

router.post('/', (req, res) => {
    var gare1 = req.body.gare1Name;
    var gare2 = req.body.gare2Name;
    res.redirect('/data?gare1='+gare1+'&gare2='+gare2)
});

module.exports = router;