const mongoose = require('mongoose');
const { Schema } = mongoose;

const Chat = new Schema({
    user1: String,
    user2: String,
    messages: [{creator: String, text: String}]
});

module.exports = mongoose.model('Chat', Chat);