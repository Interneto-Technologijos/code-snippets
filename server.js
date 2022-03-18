const net = require("net");
const fs = require("fs");

const server = net.createServer();

server.on("connection", (connection) => {
  connection.on("data", (request) => {
    const requestMessage = request.toString();
    //console.log("HTTP request", requestMessage);
    const [_request, method, path] = requestMessage.match(
      /(GET|POST|PUT|DELETE)+ ([\/a-z0-9]+) /
    );
    console.log(method, path);
    switch (method) {
      case "GET":
        switch (path) {
          case "/users":
            // DB
            // Business logic
            connection.end(
              'HTTP/1.1 200 OK\nContent-Type: application/json\n\n[{ "name": "Test user"}]'
            );
            return;
          case "/devices":
          // code to return devices
          default:
            connection.end(
              'HTTP/1.1 404 Not Found\n\n{ "error": "API endpoint is not found"}'
            );
            return;
        }
      case "POST":
        switch (path) {
          case "/users":
          // code to save user
          case "/devices":
          // code to save device
          default:
            connection.end(
              'HTTP/1.1 404 Not Found\n\n{ "error": "API endpoint is not found"}'
            );
            return;
        }
    }
    // if (requestMessage.startsWith("GET / ")) {
    //   connection.end("This is the root page\r\n");
    //   return;
    // }
    // try {
    //   const [_line, path] = requestMessage.match(/GET \/([\.a-z]+) /);
    //   console.log("public/" + path);
    //   connection.end(
    //     "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n" +
    //       fs.readFileSync("public/" + path).toString()
    //   );
    //   return;
    // } catch (error) {
    //   connection.end(
    //     "HTTP/1.1 404 Not Found\r\nServer: none of your business\r\nContent-Type: text/html\r\nContent-Length: 40\r\n\r\n<html><body>Page not found</body></html>"
    //   );
    // }
  });
});

server.listen(80);
