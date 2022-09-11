from rest_framework import serializers
from .models import Item, Category, Category


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['pk', 'name', 'price', 'description', 'chars', 'new_price', 'category', 'image']


class CuttedItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['pk', 'name', 'price', 'chars', 'category']


