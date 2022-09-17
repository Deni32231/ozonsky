from rest_framework import serializers
from .models import Vacancy, Response


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'


class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = ['vacancy', 'fio', 'phone_number', 'birthday']
