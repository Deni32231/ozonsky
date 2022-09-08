from .views import CategoryList, CategoryDetail
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path(r'', CategoryList.as_view()),
    path(r'<int:pk>', CategoryDetail.as_view())
]
