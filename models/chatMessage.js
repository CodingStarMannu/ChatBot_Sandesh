const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  text: String,
  isUser: Boolean,
});

const ChatSchema = mongoose.model('ChatMessage', chatSchema);

module.exports = ChatSchema;