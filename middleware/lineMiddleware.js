const line = require('@line/bot-sdk');
const config = require('../config/lineConfig.js');

function setupLineMiddleware(req, res, next) {
  req.body = JSON.stringify(req.body);
  return line.middleware(config)(req, res, next);
}

module.exports = setupLineMiddleware;
