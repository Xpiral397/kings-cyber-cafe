# mychatproject/asgi.py
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing  # Import the WebSocket routing configuration

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mychatproject.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
        chat.routing.websocket_urlpatterns
    ),
})
