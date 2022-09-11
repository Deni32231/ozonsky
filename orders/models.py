from django.db import models
from django.contrib.auth import get_user_model
from cart.models import Cart
from items.models import Item
from django.forms.models import model_to_dict
import json


class Order(models.Model):
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    goods = models.JSONField()
    data = models.JSONField()

    def create_goods(self):
        cart = Cart.objects.get(owner=self.owner)
        goods = []
        for k, item in enumerate(cart.goods):
            tmp_good = {'good': model_to_dict(Item.objects.get(pk=item)), 'quantity': cart.goods_quantity[k]}
            goods.append(tmp_good)
        return json.dumps(goods)

    def save(self, *args, **kwargs):
        if self.goods is None:
            goods = self.create_goods()
            self.goods = goods
        else:
            pass
        super().save(*args, **kwargs)
