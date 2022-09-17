from django.shortcuts import render
# Create your views here.
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS, IsAuthenticated
import django_filters.rest_framework
from rest_framework import status
from rest_framework import generics, mixins
from .serializers import ResponseSerializer, VacancySerializer
from items.views import ReadOnly
from .models import Vacancy, Response
from users.permissions import PostAllGetIsAdmin


class VacancyList(generics.ListCreateAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class ResponseList(generics.ListCreateAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [PostAllGetIsAdmin]
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer


class ResponseDetail(generics.RetrieveUpdateDestroyAPIView):
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsAdminUser | ReadOnly]
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer