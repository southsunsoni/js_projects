from django.db import models
class Tasch(models.model):
    task=models.TextField()
    slug=models.SlugField(max_length=100)
    date=models.DateTimeField(auto_now_add=True)



