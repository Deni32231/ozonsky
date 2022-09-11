from .views import CartDetail, CartList
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path('', CartList.as_view()),
    path('<int:pk>', CartDetail.as_view()),

]
