from django.http import HttpResponse
from django.shortcuts import render
def Home_view(request):
    return render(request,'index.html')