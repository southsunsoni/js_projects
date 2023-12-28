from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home_page_view,name='home'),
    path('display/',views.display_view,name='display'),
]
