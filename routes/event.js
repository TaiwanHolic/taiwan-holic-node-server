var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + new Date());
    next();
});

router.get('/', function(req, res) {
    res.send('event home');
});

router.get('/test', function(req, res) {
    res.send('event test home');
});

module.exports = router;