from django.shortcuts import render
from .models import contacts
from django.contrib import messages
# Create your views here.


def insertrecord(request):
     return render(request, 'contact/massage.html')
       
            
