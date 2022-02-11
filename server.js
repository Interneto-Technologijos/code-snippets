const net = require("net");

const server = net.createServer();

server.on("connection", (connection) => {
  connection.on("data", (request) => {
    console.log("HTTP request", request.toString());
    if (request.toString().startsWith("GET / ")) {
      connection.end("This is the root page\r\n");
      return;
    }
    connection.end("You are requesting some other page\r\n");
    return;
  });
});

server.listen(80);
