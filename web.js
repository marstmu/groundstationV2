const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('connected');

  socket.on('data', (data) => {
    console.log('Received Data:', data);
    io.emit('data', data);  // broadcast data to connected clients
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});