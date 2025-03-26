const fs = require('fs');
const path = require('path');

const userLogsDir = path.join(__dirname, '..', 'user_logs');

function logMessage(userId, messageText, response) {
  const userFile = path.join(userLogsDir, `${userId}.txt`);
  const logEntry = `User: ${messageText}\nBot: ${response}\n\n`;
  
  fs.appendFile(userFile, logEntry, (err) => {
    if (err) console.error("Error writing to user log file:", err);
  });
}

module.exports = { logMessage };