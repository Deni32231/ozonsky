from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model
from category.models import Category


# item model for any kind of goods
class Item(models.Model):
    name = models.TextField(verbose_name='displayed item name')
    description = models.TextField(verbose_name="description")
    chars = models.JSONField(verbose_name='characteristics')
    price = models.FloatField(verbose_name='sell price')
    #0.0 new price mean no sale
    new_price = models.FloatField(default=0.0, verbose_name="new price for sales")
    image = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)