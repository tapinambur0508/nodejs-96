import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8080 });

const clients = [];

server.on("connection", (socket) => {
  console.log("Client connected");

  clients.push(socket);

  for (const client of clients) {
    if (client === socket) {
      client.send("Welcome to Chat!");
    } else {
      client.send("New user connected");
    }
  }

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    for (const client of clients) {
      if (client === socket) {
        client.send(`You: ${data.message}`);
      } else {
        client.send(`${data.name}: ${data.message}`);
      }
    }
  };
});

console.log("Server started on port 8080");
