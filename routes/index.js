var Itinerary = require('../models/itinerary.js');
var Comment = require('../models/comment.js');
var Question = require('../models/question.js');

exports.index = function(req, res) {
    var itineraries, comments, questions;
    Itinerary.find({}, function(err, data) {
        // data 為 json array 格式
        itineraries = data;
        render();
    })

    Comment.find({}, function(err, data) {
        // data 為 json array 格式
        comments = data;
        for (var i = 0; i < comments.length; i++) {
            if (!Number.isInteger(comments[i].star)) {
                comments[i].star = new Array(1);
            } else {
                var stars = comments[i].star;
                comments[i].stars = [];
                for (var j = 0; j < stars; j++) {
                    comments[i].stars.push("");
                }
            }
        }
        render();
    })

    var promise = Question.find({}).limit(2);
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    promise.then(function(data) {
        questions = data;
        for (var i = 0; i < questions.length; i++) {
            var datetime = questions[i].datetime;
            var date = new Date(datetime);
            date = monthNames[(date.getMonth() + 1)] + " " + date.getDate();
            questions[i].datetime = date;
        }
        render();
    });

    function render() {
        if (itineraries && comments && questions) {
            res.render('index', {
                itineraries: itineraries,
                comments: comments,
                questions: questions
            });
        }
    }

}