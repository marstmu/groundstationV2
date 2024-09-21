import json
from channels.generic.websocket import AsyncWebsocketConsumer

class TelemetryConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.team_name = self.scope['url_route']['kwargs']['team_name']

        await self.channel_layer.group_add(self.team_name, self.channel_name)
        await self.accept()


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.team_name, self.channel_name)


    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await self.channel_layer.group_send(
            self.team_name, {'type': 'telemetry.data', 'message': message}
        )


    async def telemetry_data(self, event):
        message = event['message']

        await self.send(text_data=json.dumps({'message': message}))