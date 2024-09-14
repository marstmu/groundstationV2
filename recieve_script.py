import asyncio
import socketio
import time
from lora import LoRa  # replace with LoRa library

# initialize LoRa
lora = LoRa()

# initialize socket.io cleent
sio = socketio.AsyncClient()

@sio.event
async def connect():
    print("connected")

@sio.event
async def disconnect():
    print("disconnected")

async def receive_data():
    await sio.connect('http://localhost:5000')
    while True:
        if lora.received_packet():
            data = lora.read()
            await sio.emit('data', {'message': data})
            print("sent data:", data)
        await asyncio.sleep(1)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(receive_data())




socket.io server script

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




html to display


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flight Data</title>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const socket = io();
            const dataDiv = document.getElementById('data');

            socket.on('data', (data) => {
                dataDiv.innerHTML = `<p>Data: ${data.message}</p>`;
            });
        });
    </script>
</head>
<body>
    <h1>Flight Data</h1>
    <div id="data">waiting for data...</div>
</body>
</html>