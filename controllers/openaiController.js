const axios = require('axios');

const openaiController = {
  async generateChatbotResponse(userMessage) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: userMessage,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': process.env.OPENAI_API_KEY,
          },
        }
      );

      if (!response.data.choices || response.data.choices.length === 0) {
        throw new Error('Empty response from OpenAI API');
      }

      const chatbotResponse = response.data.choices[0].text.trim();
      return chatbotResponse;
    } catch (error) {
      console.error('Error generating chatbot response:', error.message);
      throw error;
    }
  },
};

module.exports = openaiController;
