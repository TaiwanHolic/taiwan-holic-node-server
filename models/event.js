var mongoose = require('mongoose');

var Event = mongoose.Schema({
    datetime: String,
    name: String,
    comment: String,
});
var Event = mongoose.model('events', Event);

module.exports = Event;