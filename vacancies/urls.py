from .views import VacancyList, VacancyDetail, ResponseDetail, ResponseList
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path(r'vacancy/', VacancyList.as_view()),
    path(r'vacancy/<int:pk>', VacancyDetail.as_view()),
    path(r'response/', ResponseList.as_view()),
    path(r'response/<int:pk>', ResponseDetail.as_view()),
]
