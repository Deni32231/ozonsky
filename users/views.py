from rest_framework import permissions
from django.contrib.auth import get_user_model
from cart.models import Cart
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, GroupSerializer, RegisterUserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from .permissions import SelfOrDeny


class UserRegistrationAPIView(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = RegisterUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            user = serializer.instance
            Cart.objects.create(owner=user)
            tokens = RefreshToken.for_user(user)
            refresh = str(tokens)
            access = str(tokens.access_token)
            data = {
                "refresh": refresh,
                "access": access
            }
            headers = self.get_success_headers(serializer.data)
            return Response(data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser | SelfOrDeny]
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UsersList(generics.ListAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = get_user_model().objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


