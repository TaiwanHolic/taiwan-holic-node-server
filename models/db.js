var mongoose = require('mongoose');
var settings = require('../settings');

// Leo Lin Mac Air 裡面的連結
// mongoose.connect(`mongodb://${settings.host}:27017/${settings.db}`);

// Mongo Lab 的連結
mongoose.connect(`mongodb://admin:taiwan@ds161029.mlab.com:61029/taiwan_holic_beta`);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('mongodb connected.');
})

module.exports = db;