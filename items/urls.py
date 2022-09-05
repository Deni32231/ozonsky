from .views import CartView, ItemsList, ItemsDetail
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path(r'user_cart/', CartView.as_view()),
    path(r'items_list/', ItemsList.as_view()),
    path(r'items_rud/<int:pk>', ItemsDetail.as_view())
]
