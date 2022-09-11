from rest_framework.permissions import BasePermission
from django.contrib.auth import get_user_model


#if user is staff - allow all, if not - allow only self or self owned obj
class SelfOrDeny(BasePermission):
    def has_permission(self, request, view) -> bool:
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj) -> bool:
        if obj is get_user_model():
            return obj == request.user
        else:
            return obj.owner == request.user


class PostAllGetIsAdmin(BasePermission):
    def has_permission(self, request, view) -> bool:
        if request.user and request.user.is_authenticated:
            if request.method == "GET" and request.user.is_staff:
                return True
            elif request.method == "POST" and (request.user == get_user_model().objects.filter(pk=request.POST.get('owner', None)).first() or request.user.is_staff):
                return True
            else:
                return False
        else:
            return False
