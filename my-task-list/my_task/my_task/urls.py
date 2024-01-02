
from django.contrib import admin
from django.urls import path
from . import Views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',Views.Home_view),
]
