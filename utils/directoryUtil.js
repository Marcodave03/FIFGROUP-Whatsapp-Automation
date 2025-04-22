const fs = require('fs');
const path = require('path');

function ensureLogDirectory() {
  const userLogsDir = path.join(__dirname, '..', 'user_logs');
  if (!fs.existsSync(userLogsDir)) {
    fs.mkdirSync(userLogsDir);
  }
}

module.exports = { ensureLogDirectory };