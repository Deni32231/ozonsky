from rest_framework import serializers
from .models import Item, Category, Cart, Category


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['pk', 'name', 'price', 'description', 'chars', 'new_price', 'category', 'image']


class CuttedItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['pk', 'name', 'price', 'chars', 'category']


class CartSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    goods = serializers.ListField(child=serializers.IntegerField())
    goods_quantity = serializers.ListField(child=serializers.IntegerField())

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.goods = validated_data.get('goods', instance.title)
        instance.goods_quantity = validated_data.get('goods_quantity', instance.code)
        instance.save()
        return instance


class CatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        field = ['name', 'parent']