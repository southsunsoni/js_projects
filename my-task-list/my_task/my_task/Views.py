from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.shortcuts import render
from .models import tasch
from .forms import task_forms
from django.core.serializers import serialize
def Home_view(request):
    return render(request,'index.html')

def get_view(request):
     tasks=tasch.objects.all()
     task_liste=[]
     for task in tasks:
         tasch_dic={
             'title':task.titre,
             'slugs':task.slugs,
             'description':task.Descriptos,
             'Date':task.Date_de_creation
             
         }
         task_liste.append(tasch_dic)
     
     return JsonResponse(task_liste,safe=False)
def form_view(request):
    tasks=task_forms()
    if request.method=='POST':
        form=task_forms(request.POST)
        form.save()
        return HttpResponseRedirect('/')
        
    return render(request,'taskform.html',{'form':tasks})
   