import os

from flask import Flask
from flask_socketio import SocketIO, emit, send
from serial import Serial
from threading import Lock

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins=['http://localhost:3000'])

worker_thread = None
thread_lock = Lock()


def read_from_serial():
    with Serial(port='COM11', baudrate=9600, timeout=5) as ser:
        while True:
            data = ser.readline().decode().strip().split(',')
            print(data)
            socketio.emit('telemetry_push', data)


@socketio.on('connect')
def accept_connection(auth):
    global worker_thread
    with thread_lock:
        if worker_thread is None:
            worker_thread = socketio.start_background_task(read_from_serial)
    send('Connected')


@socketio.on('message')
def handle_message(data):
    #print('received message: ' + data)
    emit('telemetry_push', "yo")


if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True)
