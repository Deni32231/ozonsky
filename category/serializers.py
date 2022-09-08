from rest_framework import serializers
from .models import Category


class CatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        field = ['pk', 'name', 'parent']
