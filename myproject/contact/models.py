from django.db import models

# Create your models here.



class contacts(models.Model):
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Numbers = models.FloatField()
    Topics = models.CharField(max_length=100)
    Discretion = models.TimeField()
    class meta:
        db_table = 'form'