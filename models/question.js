var mongoose = require('mongoose');

var question = mongoose.Schema({
    username: String,
    content: String,
    title: String,
    datetime: String,
    type: String
});
var Question = mongoose.model('questions', question);

module.exports = Question;