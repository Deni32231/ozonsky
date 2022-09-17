from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Vacancy(models.Model):
    name = models.TextField()
    salary = models.TextField()
    garanty = models.TextField()
    duties = models.TextField()
    benefits = models.TextField()


class Response(models.Model):
    vacancy = models.ForeignKey(Vacancy, on_delete=models.CASCADE)
    fio = models.TextField()
    phone_number = PhoneNumberField()
    birthday = models.DateField()
