from django.shortcuts import render







def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')
 
def main(request):
    return render(request, 'main.html')
 
def new(request):
   return render(request, 'new.html')
 
def backend(request):
   return render(request, 'backend1-1.html')

def upcoming(request):
   return render(request, 'upcoming.html')

def talent(request):
   return render(request, 'talent.html')

def sale(request):
   return render(request, 'sale.html')

def policy(request):
   return render(request, 'policy.html')