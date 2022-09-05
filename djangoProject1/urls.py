from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users.views import UserViewSet, GroupViewSet
from items.views import Cart, ItemsList, ItemsDetail
from users import urls as auth_urls
from items import urls as items_urls
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/', include(auth_urls)),
    path('api/items/', include(items_urls))

]
