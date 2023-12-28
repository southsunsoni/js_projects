from django.http import HttpResponse
from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from . import db
from .models import My_tasks
def home_page_view(request):
    #return HttpResponse('this is my home page')
    return render(request,'home.html')
def display_view(request):
    tasks=My_tasks.objects.all()
    serialized_data=serializers.serialize('json',tasks)
    #return HttpResponse('this is my form view')
    return JsonResponse(serialized_data,safe=False)

