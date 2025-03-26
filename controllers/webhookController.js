const line = require("@line/bot-sdk");
const { sendToOpenAI } = require("../config/openaiConfig.js");
const { logMessage } = require("../service/logService.js");
const config = require("../config/lineConfig.js");

const client = new line.Client(config);

async function handleEvents(event) {
  if (event.type === "message" && event.message.type === "text") {
    const userId = event.source.userId;
    const messageText = event.message.text;

    const openAIResponse = await sendToOpenAI(messageText);
    logMessage(userId, messageText, openAIResponse);

    return client.replyMessage(event.replyToken, {
      type: "text",
      text: openAIResponse,
    });
  }
  return Promise.resolve(null);
}

async function webhookHandler(req, res) {
  try {
    const events = JSON.parse(req.body).events;
    await Promise.all(events.map(handleEvents));
    res.status(200).end();
  } catch (err) {
    console.error("Error handling webhook:", err);
    res.status(500).end();
  }
}

module.exports = { webhookHandler };
