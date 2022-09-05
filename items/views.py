from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS, IsAuthenticated
from rest_framework import status
from rest_framework import generics
from .serializers import CartSerializer, ItemSerializer, CuttedItemSerializer
from .models import Cart, Item


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

class CartView(APIView):

    permission_classes = [IsAuthenticated]
    http_method_names = ['get', 'post', 'head']
    def get(self, request, format=None):
        try:
            cart = Cart.objects.get(user = request.user)
            serializer = CartSerializer(cart)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response("cart does not exists", status=status.HTTP_400_BAD_REQUEST)


    def post(self,request, format=None):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemsList(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = CuttedItemSerializer

class ItemsDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser|ReadOnly]
    queryset = Item.objects.all()
    serializer_class = ItemSerializer