from django.db import models
class Task(models.model):
    Task=models.TextField()
    slug=models.SlugField(max_length=100)
    publication_date=models.DateTimeField(auto_now_add=True)