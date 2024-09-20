import asyncio
import socketio
import time
from lora import LoRa  # replace with LoRa library

# initialize LoRa
lora = LoRa()

# initialize socket.io client
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
