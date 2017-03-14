var express = require('express');
var router = express.Router();
var Resaturant = require('../models/restaurant.js');
var Spot = require('../models/spot.js');
var Stay = require('../models/stay.js');

router.get('/', function(req, res) {
    res.render('city');
});

router.get('/about', function(req, res) {
    res.send('About city');
});

router.get('/northern', function(req, res) {
    var restaurants, spots, stays;

    var restaurant_promise = Resaturant.find({ area: 'northern' }).limit(3);
    restaurant_promise.then(function(data) {
        restaurants = data;
        render();
    });

    var spot_promise = Spot.find({ area: 'northern' }).limit(3);
    spot_promise.then(function(data) {
        spots = data;
        render();
    });

    var stay_promise = Stay.find({ area: 'northern' }).limit(3);
    stay_promise.then(function(data) {
        stays = data;
        render();
    });

    function render() {
        if (restaurants && spots && stays) {
            res.render('city_area', {
                restaurants: restaurants,
                spots: spots,
                stays: stays,
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
        }
    }
});

module.exports = router;