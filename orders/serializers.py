from rest_framework import serializers
from .models import Order


class OrderCreateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ['pk', 'data']


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ['pk', 'goods', 'data']