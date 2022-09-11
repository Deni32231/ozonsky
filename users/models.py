from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    email = models.EmailField('email address', blank=False)
    adress = models.TextField(blank=True, null=True)
    fio = models.JSONField(blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)