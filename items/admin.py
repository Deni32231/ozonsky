from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Item, Cart

admin.site.register(Item)
admin.site.register(Cart)
from django.contrib import admin

# Register your models here.
