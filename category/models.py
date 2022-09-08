from django.db import models


class Category(models.Model):
    name = models.TextField()
    parent = models.ForeignKey("self", on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)
# Create your models here.
