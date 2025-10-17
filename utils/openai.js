// utils/openai.js
const axios = require("axios");

const OPENAI_API_KEY =
  process.env.OPENAI_API_KEY || process.env.openAI;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-3.5-turbo";

async function chatOpenAI({ system, user, max_tokens = 300, temperature = 0.6 }) {
  try {
    const { data } = await axios.post(
      OPENAI_URL,
      {
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        max_tokens,
        temperature,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data.choices?.[0]?.message?.content?.trim() || "";
  } catch (err) {
    console.error("OpenAI error:", err?.response?.data || err.message);
    return "";
  }
}

module.exports = { chatOpenAI };
