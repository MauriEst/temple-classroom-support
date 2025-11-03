from rest_framework import generics
from .models import SupportRequest
from .serializers import SupportRequestSerializer

# This view allows 'POST' requests to create a new support request.
class SupportRequestCreateView(generics.CreateAPIView):
    queryset = SupportRequest.objects.all()
    serializer_class = SupportRequestSerializer