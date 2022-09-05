from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model


#user cart model
class Cart(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    goods = ArrayField(models.IntegerField())
    goods_quantity = ArrayField(models.IntegerField())

#category root class
class RootCategory(models.Model):
    pass


class Category(RootCategory):
    name = models.TextField()
    parent = models.ForeignKey("self", blank=True, on_delete=models.CASCADE)


# item model for any kind of goods
class Item(models.Model):
    name = models.TextField(verbose_name='displayed item name')
    description = models.TextField(verbose_name="description")
    chars = models.JSONField(verbose_name='characteristics')
    price = models.FloatField(verbose_name='sell price')
    ##0.0 new price mean no sale
    new_price = models.FloatField(default=0.0, verbose_name="new price for sales")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)