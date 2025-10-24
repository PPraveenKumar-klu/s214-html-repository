let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello from Node.js Server!</h1>");
  })
  .listen(9090);
