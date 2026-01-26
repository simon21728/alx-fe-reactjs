from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, ContactViewSet,HomeViewSet,AboutViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'home', HomeViewSet)   
router.register(r'about', AboutViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
