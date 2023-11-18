// routes/index.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const openaiController = require('../controllers/openaiController');

// Routes for chat messages
router.get('/chat', chatController.getAllChatMessages);
router.post('/chat', chatController.addChatMessage);
router.put('/chat/:id', chatController.updateChatMessage);
router.delete('/chat/:id', chatController.deleteChatMessage);

module.exports = router;
