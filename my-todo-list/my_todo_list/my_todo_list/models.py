from django.db import models
class My_tasks(models.Model):
    Nom=models.CharField(max_length=150)
    Description=models.TextField()
    slug=models.SlugField(max_length=100)
    Date=models.DateTimeField(auto_now_add=True)