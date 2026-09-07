// app.js
// Demonstrates importing & reusing the custom modules (isEven + logger)
// Run: node app.js

const isEven = require("./modules/isEven");
const { logInfo, logError, logWarn } = require("./modules/logger");

logInfo("Starting module reusability demo...");

const numbers = [3, 4, 7, 10, 15, 22, -6, 0];

numbers.forEach((num) => {
  if (isEven(num)) {
    logInfo(`${num} is Even`);
  } else {
    logError(`${num} is Odd`);
  }
});

logWarn("Demo finished. Modules were reused successfully!");
