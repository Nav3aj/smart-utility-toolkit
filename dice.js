// dice.js
// Random Dice Generator using the crypto module
// Run: node dice.js

const crypto = require("crypto");
const fs = require("fs");

const HISTORY_FILE = "dice-history.txt";

// Generates a secure random integer between min and max (inclusive)
function rollDice(min = 1, max = 6) {
  const range = max - min + 1;
  const randomValue = crypto.randomInt(0, range); // crypto.randomInt is secure
  return randomValue + min;
}

// Simulate multiple dice rolls using a loop
const numberOfRolls = 5;
const results = [];

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice(1, 6);
  results.push(result);
  console.log(`🎲 Dice Rolled: ${result}`);
}

// Bonus: store dice roll history in a text file
const historyLine = `[${new Date().toISOString()}] Rolls: ${results.join(", ")}\n`;
fs.appendFile(HISTORY_FILE, historyLine, (err) => {
  if (err) {
    console.log("Could not save roll history:", err.message);
    return;
  }
  console.log(`Roll history saved to ${HISTORY_FILE}`);
});
