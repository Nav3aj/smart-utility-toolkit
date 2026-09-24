// Navraj Amgai
// B.Tech CSE AI/ML

const fs = require("fs");
const http = require("http");

console.log("=== 1. TRACKING CLI INPUTS ===");
const args = process.argv.slice(2);
console.log("CLI Arguments Received:", args.length > 0 ? args : "No arguments provided");


console.log("\n=== 2. OBSERVING EXECUTION ORDER ===");
console.log("[LOG 1] Program Execution Started");


console.log("[LOG 2] Starting Synchronous Math Calculation...");
const result = 100 * 50;
console.log("[LOG 3] Synchronous Calculation Completed. Result:", result);

console.log("[LOG 4] BEFORE Calling Asynchronous fs.readFile()");

fs.readFile("sample.txt", "utf8", (err, data) => {
  console.log("\n[LOG 6] INSIDE Async File Callback — Executed by Event Loop");
  if (err) {
    console.log("--> [Debug File Op] Error Handled Gracefully:", err.code);
  } else {
    console.log("--> [Debug File Op] File Content:", data);
  }
});

console.log("[LOG 5] AFTER Calling fs.readFile() (Runs immediately, non-blocking)");


console.log("\n=== 3. ANALYZING SERVER REQUESTS ===");

const server = http.createServer((req, res) => {
  console.log(`[SERVER LOG] Request Received -> Method: ${req.method} | URL: ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server Request Analyzed Successfully");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`[SERVER LOG] Server active on port ${PORT}`);
  console.log("Auto-closing server demo...");
  server.close();
});
