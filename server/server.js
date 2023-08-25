const { createServer } = require("http") ;
const { Server } = require("socket.io") ;
const express = require('express') ;
const cors = require('cors');

const app = express();
app.use(cors());

const httpServer = createServer(app); 
const io = new Server(httpServer, { cors: { origin: '*' }

});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on("joinRoom", (data) => {
    const { username, roomNumber } = data;
    socket.join(roomNumber);
    io.to(roomNumber).emit("userJoined", `${username} присоединился к комнате ${roomNumber}`);
  });
  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
