from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model
from category.models import Category


#user cart model
class Cart(models.Model):
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    goods = ArrayField(models.IntegerField(), blank=True, null=True)
    goods_quantity = ArrayField(models.IntegerField(), blank=True, null=True)
