from django.shortcuts import render
def task_list_view(request):
    return render(request,'index.html')
