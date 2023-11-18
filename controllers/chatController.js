// controllers/chatController.js
const ChatMessage = require('../models/chatMessage');

// Get all chat messages
exports.getAllChatMessages = async (req, res) => {
  try {
    const chatMessages = await ChatMessage.find();
    res.json(chatMessages);
  } catch (error) {
    console.error('Error getting chat messages:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a new chat message
exports.addChatMessage = async (req, res) => {
  const { text, isUser } = req.body;

  try {
    const newMessage = new ChatMessage({
      text,
      isUser,
    });

    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (error) {
    console.error('Error adding chat message:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Example: Update a chat message by ID
exports.updateChatMessage = async (req, res) => {
  const messageId = req.params.id;
  const { text } = req.body;

  try {
    const updatedMessage = await ChatMessage.findByIdAndUpdate(
      messageId,
      { text },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ message: 'Chat message not found' });
    }

    res.json(updatedMessage);
  } catch (error) {
    console.error('Error updating chat message:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Example: Delete a chat message by ID
exports.deleteChatMessage = async (req, res) => {
  const messageId = req.params.id;

  try {
    const deletedMessage = await ChatMessage.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      return res.status(404).json({ message: 'Chat message not found' });
    }

    res.json({ message: 'Chat message deleted successfully' });
  } catch (error) {
    console.error('Error deleting chat message:', error);
    res.status(500).send('Internal Server Error');
  }
};

