// let us create  new websocket server then we can youse  to send and recive message

const { WebSocketServer } = require("ws");

// recive message from the client
// connect log message
// on connection lost

const server = new WebSocketServer({ port: 4000 });

server.on("error", (err) => {
  console.log("ops somting went off", err.message);
});

server.on("connection", (socket) => {
  // log the connectuion status
  console.log("New client cnnected Here");
  // listen for the messages arrived from  the  client
  socket.on("message", (msg) => {
    // mark means to identfi who send the messagae
    const { message, mark } = JSON.parse(msg);
    console.log("I recived a meesage from client : " + mark);

    console.log("Message : ", message);
    //after 3 seconds sendt a message to the client

    setTimeout(() => {
      socket.send(
        "Hellow client your message arrived At [" +
          new Date().toISOString() +
          "]",
      );
    }, 3000);
  });
  socket.on("close", (data) => {
    
    console.log("\nClient " + data.toString() + " [DISCONNECTED]\n");
  });
});

//
console.log("The server is running on port 4000");
