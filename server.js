// server.js
// Basic HTTP server using Node's built-in http module (no Express)
// Run: node server.js
// Visit: http://localhost:3000/       -> Welcome message
// Visit: http://localhost:3000/about  -> About page
// Visit: http://localhost:3000/contact -> Contact page
// Any other route -> 404 Error message

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Execution flow log: track every incoming request
  console.log(`[${new Date().toISOString()}] Request received for: ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 Error: Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
