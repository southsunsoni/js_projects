
from django.contrib import admin
from django.urls import path
from . import Views
from django.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Views.Home_view),  # Added a slash for consistency
    path('task/', Views.get_view),
    path('form/', Views.form_view),  # Removed the comma at the end
]
