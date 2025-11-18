"""
Views for contact form handling
"""

from rest_framework import status, generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from django.core.mail import send_mail
from django.conf import settings
import logging

from .models import ContactMessage
from .serializers import ContactMessageSerializer

logger = logging.getLogger(__name__)


class ContactRateThrottle(AnonRateThrottle):
    """Custom throttle for contact form: 10 requests per hour"""
    rate = '10/hour'


class ContactMessageView(generics.CreateAPIView):
    """
    API endpoint for contact form submissions
    POST /api/contact/
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = (AllowAny,)
    throttle_classes = [ContactRateThrottle]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact_message = serializer.save()
        
        # Send confirmation email to user
        self._send_confirmation_email(contact_message)
        
        # Send notification to admin
        self._send_admin_notification(contact_message)
        
        return Response(
            {
                'id': contact_message.id,
                'status': 'received',
                'message': 'Thank you for contacting us. We will respond shortly.'
            },
            status=status.HTTP_201_CREATED
        )
    
    def _send_confirmation_email(self, contact_message):
        """Send acknowledgment email to the user"""
        try:
            subject = f"BomaniHosts - We received your message: {contact_message.subject}"
            message = f"""
Dear {contact_message.name},

Thank you for contacting BomaniHosts. We have received your message and will get back to you as soon as possible.

Your Message:
Subject: {contact_message.subject}
Message: {contact_message.message}

Best regards,
BomaniHosts Team
            """
            
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[contact_message.email],
                fail_silently=True,
            )
            logger.info(f"Confirmation email sent to {contact_message.email}")
        except Exception as e:
            logger.error(f"Failed to send confirmation email: {str(e)}")
    
    def _send_admin_notification(self, contact_message):
        """Send notification email to admin"""
        try:
            subject = f"New Contact Form Submission: {contact_message.subject}"
            message = f"""
New contact form submission received:

Name: {contact_message.name}
Email: {contact_message.email}
Phone: {contact_message.phone or 'Not provided'}
Subject: {contact_message.subject}

Message:
{contact_message.message}

---
Received at: {contact_message.created_at}
            """
            
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=True,
            )
            logger.info(f"Admin notification sent for contact ID {contact_message.id}")
        except Exception as e:
            logger.error(f"Failed to send admin notification: {str(e)}")