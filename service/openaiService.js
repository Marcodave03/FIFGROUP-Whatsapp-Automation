const axios = require('axios');
const { apiKey, endpoint } = require('../config/openaiConfig.js');

async function sendToOpenAI(prompt) {
  try {
    if (prompt.toLowerCase().includes("alvin") || prompt.toLowerCase().includes("chris")) {
      return "I don't know this guy.";
    }

    const context = `
      You are an informational chatbot for Binus English Club (BNEC) always speak in english. 
      [SAME CONTEXT AS IN YOUR ORIGINAL CODE - OMITTED FOR BREVITY]
    `;
    
    const response = await axios.post(
      endpoint,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: context },
          { role: "user", content: prompt }
        ],
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.message);
    return "I'm sorry, something went wrong with OpenAI. Please try again later.";
  }
}

module.exports = { sendToOpenAI };