from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS, IsAuthenticated
import django_filters.rest_framework
from rest_framework import status
from rest_framework import generics, mixins
from .serializers import ItemSerializer, CuttedItemSerializer
from .models import Item
from users.permissions import SelfOrDeny


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS



class ItemsList(generics.ListCreateAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Item.objects.all()
    serializer_class = CuttedItemSerializer


class ItemsDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser|ReadOnly]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

