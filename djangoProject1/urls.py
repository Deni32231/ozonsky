from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users import urls as users_urls
from items import urls as items_urls
from category import urls as category_urls
from cart import urls as cart_urls
from orders import urls as orders_urls
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/users/', include(users_urls)),
    path('api/items/', include(items_urls)),
    path('api/categories/', include(category_urls)),
    path('api/carts/', include(cart_urls)),
    path('api/orders/', include(orders_urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
