from django.shortcuts import render






def homepage(request):
   return render(request, 'home.html')


def about(request):
    return render(request, 'about.html')
 
 
def new(request):
   return render(request, 'new.html')
 
def backend(request):
   return render(request, 'backend1-1.html')