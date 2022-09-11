from rest_framework import generics
from .serializers import CartSerializer
from .models import Cart
from rest_framework.permissions import IsAdminUser
from users.permissions import SelfOrDeny
# Create your views here.


class CartList(generics.ListCreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAdminUser | SelfOrDeny]
    queryset = Cart.objects.all()
    serializer_class = CartSerializer