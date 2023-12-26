from django.http import HttpResponse
from django.shortcuts import render
def home_page_view(request):
    #return HttpResponse('this is my home page')
    return render(request,'home.html')
def form_view(request):
    #return HttpResponse('this is my form view')
    return render(request,'form.html')

