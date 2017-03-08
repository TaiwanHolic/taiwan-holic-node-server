var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('city');
});

router.get('/about', function(req, res) {
    res.send('About city');
});

module.exports = router;