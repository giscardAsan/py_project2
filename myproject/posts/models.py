from django.db import models

# Create your models here.

class post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    slug = models.SlugField()
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title + ' ' + self.body
