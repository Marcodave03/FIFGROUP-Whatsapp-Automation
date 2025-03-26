const express = require("express");
const setupLineMiddleware = require("./middleware/lineMiddleware.js");
const { webhookHandler } = require("./controllers/webhookController.js");
const { ensureLogDirectory } = require("./utils/directoryUtil.js");

const app = express();

app.use(express.json());
ensureLogDirectory();

app.post("/webhook", setupLineMiddleware, webhookHandler);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

module.exports = app;
