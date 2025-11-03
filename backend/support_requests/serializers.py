from rest_framework import serializers
from .models import SupportRequest

class SupportRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportRequest
        # Fields to include in the API
        fields = ['id', 'name', 'email', 'classroom', 'issue_type', 'description', 'created_at']