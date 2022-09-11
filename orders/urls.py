from .views import OrdersList, OrdersDetail
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path(r'', OrdersList.as_view()),
    path(r'<int:pk>', OrdersDetail.as_view())
]
