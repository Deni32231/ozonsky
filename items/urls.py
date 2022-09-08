from .views import CartView, ItemsList, ItemsDetail
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path(r'cart', CartView.as_view()),
    path(r'', ItemsList.as_view()),
    path(r'<int:pk>', ItemsDetail.as_view())
]
