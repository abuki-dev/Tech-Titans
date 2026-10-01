// building chat romm
// coolect all clients using set arrays
// any message from the client soould be sendt to everyclintes if they ar eun rady state and open
// log any conectin gand dicnnectsing

const { WebSocketServer } = require("ws");

const wsserver = new WebSocketServer({ port: 4000 });

// clients set
const Clients = new Set();

wsserver.on("connection", (socket) => {
  // add it event to send message to everyone

  socket.on("message", (msg) => {
    const { message } = JSON.parse(msg);
    wsserver.clients.forEach((client) => {
      // we can send message we are connected and can send message
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  // let us attach whenen disconnected
  socket.on("close", () => {
    // remove it form teh lst
    Clients.delete(socket);
    // diplay how many are left
    console.log(`Client disconnected. Total online: ${Clients.size}`);
  });
  // after all let us add this client to the clients
  Clients.add(socket);

  // log connected sucussfullt
  console.log("Clinet Connetcted sucussfully");
});

console.log("WebSocket broadcasting server running on ws://localhost:4000");
