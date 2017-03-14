var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    username: String,
    content: String,
    title: String,
    datetime: String,
    type: String
});
var Question = mongoose.model('questions', questionSchema);

module.exports = Question;