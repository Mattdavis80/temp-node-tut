// http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
});

// listen on a specific port
server.listen("3000");
