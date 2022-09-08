from .views import UsersList, UserDetail, UserRegistrationAPIView
from django.urls import path, include
from rest_framework import routers


urlpatterns = [
    path('', UsersList.as_view()),
    path('create', UserRegistrationAPIView.as_view()),
    path('<int:pk>', UserDetail.as_view()),

]
