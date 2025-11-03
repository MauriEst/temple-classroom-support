from django.db import models

class SupportRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    classroom = models.CharField(max_length=50)
    issue_type = models.CharField(max_length=50, choices=[
        ('projector', 'Projector Issue'),
        ('computer', 'Computer/Login'),
        ('audio', 'Audio/Microphone'),
        ('other', 'Other'),
    ])
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.classroom} - {self.issue_type}"