// server.js
// Two LINE bots (Finatra + Metland/Maya) with separate webhooks

const express = require("express");
const line = require("@line/bot-sdk");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const { chatOpenAI } = require("./utils/openai");
const { SYSTEM_FINATRA } = require("./prompts/finatra");
const { buildMayaSystem } = require("./prompts/metland");
const {
  tenantDatabase,
  Toilet,
  Parkir,
  NursingRoom,
  TarifParkir,
  PromoProgram,
  Bazaar,
} = require("./data/metland_data");
const { keywordResponses } = require("./data/finatra_keywords");

// ---------- LINE CONFIGS (2 bots) ----------
const configFinatra = {
  channelAccessToken:
    process.env.FINATRA_CHANNEL_TOKEN ||
    "ZH0ONt8zUaG2OwT0khzCFzqztBZexrq1hklQaiomzhHXXkW2tTrdGyyyiK2dYa95UVp5eSuOXTz9Mgk2/XVuw3TouPcMx0Fppd9W/9Dgrs9bhMn8l4HJAwYa9C1QXZuDBx/qCPrh6ITF1iihBxSXAwdB04t89/1O/w1cDnyilFU=",
  channelSecret:
    process.env.FINATRA_CHANNEL_SECRET ||
    "0300a0dc6f828ed8bb0f0462773d9591",
};

const configMetland = {
  channelAccessToken:
    process.env.METLAND_CHANNEL_TOKEN ||
    "LMLQa883CxQ/MZev41epokq6Ih20HP02Q/0h1VYPVxGaPUSt2S88u2M1j6IkTk8aL+pP8iEUGEqUKxY69XKC/alkivEennCtzrQnS8RLSA0Plw3muAnNFbAuYbLApyoHooP4cGzf9N5TmYRBt2PGTAdB04t89/1O/w1cDnyilFU=",
  channelSecret:
    process.env.METLAND_CHANNEL_SECRET ||
    "d16b082c6d1e176518333fbaf3fee4a5",
};

const clientFinatra = new line.Client(configFinatra);
const clientMetland  = new line.Client(configMetland);

// ---------- APP ----------
const app = express();
app.get("/", (_req, res) => res.send("OK — Finatra + Metland bots running"));

// ---------- Logging helper ----------
const logsDir = "/tmp/user_logs";
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
const appendLog = (bot, userId, line) => {
  const file = path.join(logsDir, `${bot}_${userId}.txt`);
  fs.appendFile(file, line + "\n", (e) => e && console.error(e));
};

// ======================================================
// FINATRA WEBHOOK
// ======================================================
app.post("/webhook/finatra", line.middleware(configFinatra), async (req, res) => {
  try {
    const events = req.body.events || [];
    await Promise.all(
      events.map(async (event) => {
        if (event.type !== "message" || event.message.type !== "text") return;

        const userId = event.source.userId;
        const text   = (event.message.text || "").trim();
        const upper  = text.toUpperCase();

        appendLog("finatra", userId, `User: ${text}`);

        // 1) Keyword responses (cards)
        if (keywordResponses[upper]) {
          const card = keywordResponses[upper];
          await clientFinatra.replyMessage(event.replyToken, {
            type: "template",
            altText: card.title,
            template: {
              type: "buttons",
              thumbnailImageUrl:
                card.image ||
                "https://via.placeholder.com/1024?text=FIFGROUP",
              title: card.title,
              text: card.text,
              actions: [
                {
                  type: "uri",
                  label: "Info Lebih Lanjut",
                  uri: "https://www.fifgroup.co.id",
                },
              ],
            },
          });
          appendLog("finatra", userId, `Bot(card): ${card.title}`);
          return;
        }

        // 2) Guard for your "input" case (kept from your original)
        if (text.toLowerCase().includes("input")) {
          await clientFinatra.replyMessage(event.replyToken, {
            type: "text",
            text: "I don't know this guy.",
          });
          appendLog("finatra", userId, `Bot: I don't know this guy.`);
          return;
        }

        // 3) OpenAI answer (short + on-topic)
        const ai = await chatOpenAI({
          system: SYSTEM_FINATRA,
          user: text,
          max_tokens: 220,
        });

        const finalText =
          ai ||
          "Maaf, terjadi kendala. Silakan coba lagi atau kunjungi fifgroup.co.id.";
        await clientFinatra.replyMessage(event.replyToken, {
          type: "text",
          text: finalText,
        });
        appendLog("finatra", userId, `Bot: ${finalText}`);
      })
    );
    res.status(200).end();
  } catch (err) {
    console.error("Finatra webhook error:", err);
    res.status(500).end();
  }
});

// ======================================================
// METLAND / MAYA WEBHOOK
// ======================================================
app.post("/webhook/metland", line.middleware(configMetland), async (req, res) => {
  try {
    const events = req.body.events || [];
    await Promise.all(
      events.map(async (event) => {
        if (event.type !== "message" || event.message.type !== "text") return;

        const userId = event.source.userId;
        const text   = (event.message.text || "").trim();

        appendLog("metland", userId, `User: ${text}`);

        const system = buildMayaSystem({
          tenantDatabase,
          Toilet,
          Parkir: `${Parkir}\n${TarifParkir}`,
          NursingRoom,
          PromoProgram,
          Bazaar,
        });

        const raw = await chatOpenAI({
          system,
          user: text,
          max_tokens: 320,
        });

        // Try parse JSON from model
        let maya = null;
        try {
          const jsonStr = String(raw || "")
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/```$/i, "")
            .trim();
          maya = JSON.parse(jsonStr);
        } catch (_) {}

        if (!maya || !maya.text) {
          const fallback =
            "Halo! Grand Metropolitan Mall buka jam 10 pagi hingga jam 10 malam. Ada yang bisa saya bantu?";
          await clientMetland.replyMessage(event.replyToken, {
            type: "text",
            text: fallback,
          });
          appendLog("metland", userId, `Bot(fallback): ${fallback}`);
          return;
        }

        const replies = [{ type: "text", text: maya.text }];

        // Optional image handling: attach placeholder if image name provided
        if (maya.image && typeof maya.image === "string") {
          replies.push({
            type: "text",
            text: `Gambar terkait: ${maya.image}`,
          });
          replies.push({
            type: "image",
            originalContentUrl:
              "https://via.placeholder.com/1024x768?text=" +
              encodeURIComponent(maya.image),
            previewImageUrl:
              "https://via.placeholder.com/512x384?text=" +
              encodeURIComponent(maya.image),
          });
        }

        await clientMetland.replyMessage(event.replyToken, replies);
        appendLog("metland", userId, `Bot(JSON): ${maya.text}`);
      })
    );
    res.status(200).end();
  } catch (err) {
    console.error("Metland webhook error:", err);
    res.status(500).end();
  }
});

// --------- Export for serverless (Vercel/Cloud Functions) ---------
module.exports = (req, res) => {
  app(req, res);
};

// // Local run:
// // const PORT = process.env.PORT || 3001;
// // app.listen(PORT, () => console.log(`Listening on ${PORT}`));
