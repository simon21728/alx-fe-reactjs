from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Service, Contact,Home, About
from .serializers import ServiceSerializer, ContactSerializer,HomeSerializer, AboutSerializer
from rest_framework.decorators import action
from rest_framework.response import Response



class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()       
    serializer_class = HomeSerializer 

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
