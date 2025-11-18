"""
Serializers for contact form
"""

from rest_framework import serializers
from .models import ContactMessage


class ContactMessageSerializer(serializers.ModelSerializer):
    """
    Serializer for contact form submissions
    """
    class Meta:
        model = ContactMessage
        fields = ('id', 'name', 'email', 'phone', 'subject', 'message', 'created_at')
        read_only_fields = ('id', 'created_at')
    
    def validate_email(self, value):
        """Validate email format"""
        return value.lower()
    
    def validate_message(self, value):
        """Ensure message has minimum length"""
        if len(value.strip()) < 10:
            raise serializers.ValidationError(
                "Message must be at least 10 characters long."
            )
        return value.strip()