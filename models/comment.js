var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    date: String,
    content_id: String,
    comment_content: String,
    type: String,
    comment_title: String,
    comment_username: String,
    comment_during: String,
    comment_surrounding: String,
    comment_rent: String,
    comment_contact: String,
    comment_more: String,
    star: Number,
    images: [{
        type: String
    }]
});
var Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;