const WebSocket = require("ws");

// log client connections
const wss = new WebSocket.Server({
  port: 3000,
});

wss.on("connection", () => {
  console.log("New client client connected  ");
});

wss.on("message", (message) => {
  console.log("Revivedd ameesage from the client that says\n");
  console.log(message.toString());
});
