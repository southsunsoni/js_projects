from django.db import models
class tasch(models.Model):
    titre=models.CharField(max_length=100)
    Descriptos=models.TextField()
    slugs=models.SlugField(max_length=20)
    Date_de_creation=models.DateTimeField(auto_now_add=True)