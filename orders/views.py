from rest_framework import permissions
from django.contrib.auth import get_user_model
from cart.models import Cart
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import OrderCreateSerializer, OrderSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from users.permissions import SelfOrDeny
from .models import Order
from users.permissions import PostAllGetIsAdmin
# Create your views here.

class OrdersList(generics.ListCreateAPIView):
    permission_classes = [PostAllGetIsAdmin]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrdersDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser|SelfOrDeny]
    queryset = Order.objects.all()
    serializer_class = OrderSerializer