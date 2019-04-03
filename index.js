const express = require("express");
const socket = require("socket.io");

const app = express();

//Server setup
const server = app.listen(4000, () => {
  console.log("listening to requests on port 4000");
});

app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", socket => {
  console.log("make socket connection", socket.id);

  socket.on("chat", data => {
    //emit event to all of the different sockets
    io.sockets.emit("chat", data);
  });
});
