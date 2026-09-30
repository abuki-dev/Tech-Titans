const { WebSocketServer } = require("ws");
const { createServer } = require("https");
const Server = new WebSocketServer({ port: 8080 });
new WebSocketServer({ noServer: true, port: 8888, server: server });

const cors = require("cors");


// Server.on("connection", (socket) => {
//   console.log("New client connected here");

//   socket.on("message", (message) => {
//     console.log(`Recived ${message.toString()} From the client`);

//     socket.send(`Server says to you hellow i recived your message`);
//   });
//   socket.send("Conecction succsuss");
// });

Server.on("connection", (socket) => {
  socket.on("message", (message) => {
    Server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        if (socket === client) {
          client.send("your message have ben sent");
        } else {
          client.send(message.toString());
        }
      }
    });
  });
});

Server.on("close", () => {
  console.log("client disconnected");
});

console.log("The server is rounning on Port 8080");
