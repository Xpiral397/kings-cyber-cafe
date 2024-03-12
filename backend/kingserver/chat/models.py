# chat_app/models.py
from django.db import models
from users.models import UserAccount




class ChatSession(models.Model):
    CHAT_TYPES = [
        ('customer', 'Customer'),
        ('client', 'Client'),
    ]

    CHAT_STATES = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('waiting', 'Waiting'),
        ('completed', 'Completed'),
    ]

    user = models.ForeignKey(UserAccount, related_name = 'user_chat_session', on_delete=models.CASCADE)
    chat_type = models.CharField(max_length=20, choices=CHAT_TYPES)
    chat_number = models.CharField(max_length=255)
    state = models.CharField(max_length=20, choices=CHAT_STATES, default='new')
    last_message = models.TextField(blank=True, null=True)
    last_message_sender = models.ForeignKey(UserAccount, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Chat #{self.chat_number} - {self.get_chat_type_display()} - {self.get_state_display()}"
