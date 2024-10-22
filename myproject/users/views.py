from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login

# Create your views here.
def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            login(request, form.save())
            return redirect("main")
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {"form": form })



def logins(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return redirect("main")
    else:
        form = AuthenticationForm()
    return render(request, 'users/logins.html', {"form": form })
    