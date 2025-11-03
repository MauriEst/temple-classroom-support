from django.urls import path
from .views import SupportRequestCreateView

urlpatterns = [
    # React will POST data to this URL: /api/requests/submit/
    path('submit/', SupportRequestCreateView.as_view(), name='submit-request'),
]