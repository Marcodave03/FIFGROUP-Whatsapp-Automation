require('dotenv').config();

module.exports = {
  apiKey: process.env.openAI,
  endpoint: 'https://api.openai.com/v1/chat/completions',
};