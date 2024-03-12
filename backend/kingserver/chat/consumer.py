# chat_app/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import ChatSession

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        sender_id = text_data_json['sender_id']
        chat_session_id = text_data_json['chat_session_id']

        # Save the message to the database
        chat_session = ChatSession.objects.get(id=chat_session_id)
        chat_session.last_message = message
        chat_session.last_message_sender_id = sender_id
        chat_session.save()

        # Broadcast the message to all connected clients
        await self.send(text_data=json.dumps({
            'message': message,
            'sender_id': sender_id,
            'chat_session_id': chat_session_id,
        }))
