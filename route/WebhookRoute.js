const express = require("express");
const router = express.Router();
const { handleLineEvent } = require("../service/LineService.js");

router.post("/", async (req, res) => {
  try {
    const events = req.body.events;
    await Promise.all(events.map(handleLineEvent));
    res.sendStatus(200);
  } catch (error) {
    console.error("Webhook Error:", error);
    res.sendStatus(500);
  }
});

module.exports = router;
