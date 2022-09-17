from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users import urls as users_urls
from items import urls as items_urls
from category import urls as category_urls
from cart import urls as cart_urls
from orders import urls as orders_urls
from vacancies import urls as work_urls
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(
        title="Dummy API",
        default_version='v1',
        description="Dummy description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@dummy.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/users/', include(users_urls)),
    path('api/items/', include(items_urls)),
    path('api/categories/', include(category_urls)),
    path('api/carts/', include(cart_urls)),
    path('api/orders/', include(orders_urls)),
    path('api/work/', include(work_urls)),
    path(r'playground/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
