
const axios = require('axios');

const openaiController = {
  async generateChatbotResponse(userMessage) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: userMessage,
          max_tokens: 50, // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const chatbotResponse = response.data.choices[0].text.trim();
      return chatbotResponse;
    } catch (error) {
      console.error('Error generating chatbot response:', error);
      throw error;
    }
  },
};

module.exports = openaiController;
