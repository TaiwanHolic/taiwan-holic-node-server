var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    datetime: String,
    name: String,
    comment: String,
});
var Event = mongoose.model('events', eventSchema);

module.exports = Event;