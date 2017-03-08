var express = require('express');
var router = express.Router();
var Itinerary = require('../models/itinerary.js');
var exphbs = require('express-handlebars');

router.get('/', function(req, res) {
    Itinerary.find({}, function(err, data) {
        itineraries = data;
        res.render('itineraries', {
            itineraries: itineraries,
            helpers: {
                arrayToString: function(arr) {
                    var arr_string = arr.toString();
                    arr_string = arr_string.replace(/,/g, ", ");
                    return arr_string;
                }
            }
        });
    })
});

router.get('/:id', function(req, res) {
    Itinerary.find({ id: req.params.id }, function(err, data) {

        var itinerary = data[0];

        res.render('itinerary', {
            itinerary: itinerary,
            helpers: {
                arrayToString: function(arr) {
                    return arr.toString().replace(/,/g, ", ");
                },
                toEmptyArray: function(num) {
                    var arr = [];
                    for (var i = 0; i < num; i++) {
                        arr.push(i);
                    }
                    return arr;
                }
            }
        });
    });
});

module.exports = router;