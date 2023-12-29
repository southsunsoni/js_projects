from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from . import db
from .models import My_tasks
def home_page_view(request):
    #return HttpResponse('this is my home page')
    return render(request,'home.html')
def display_view(request):
    tasks=My_tasks.objects.all()
    data=list(tasks.values())
    #return render(request,'form.html',context={'tasks':data})
    return JsonResponse(data,safe=False)

