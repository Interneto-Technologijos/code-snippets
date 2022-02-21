const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.on("connection", (connection) => {
  connection.on("data", (request) => {
    const requestMessage = request.toString();
    //console.log("HTTP request", requestMessage);
    if (requestMessage.startsWith("GET / ")) {
      connection.end("This is the root page\r\n");
      return;
    }
    try {
      const [_line, path] = requestMessage.match(/GET \/([\.a-z]+) /);
      console.log("public/" + path);
      connection.end(
        "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n" +
          fs.readFileSync("public/" + path).toString()
      );
      return;
    } catch (error) {
      connection.end(
        "HTTP/1.1 404 Not Found\r\nServer: none of your business\r\nContent-Type: text/html\r\nContent-Length: 40\r\n\r\n<html><body>Page not found</body></html>"
      );
    }
  });
});

server.listen(80);
