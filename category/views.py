from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS, IsAuthenticated
import django_filters.rest_framework
from rest_framework import status
from rest_framework import generics, mixins
from .serializers import CatSerializer
from .models import Category
from items.views import ReadOnly


class CategoryList(generics.ListCreateAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Category.objects.all()
    serializer_class = CatSerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Category.objects.all()
    serializer_class = CatSerializer

# Create your views here.
