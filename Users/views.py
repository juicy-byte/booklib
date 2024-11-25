from django.shortcuts import render
from . import forms



# Create your views here.
def register(request):
    form = forms.UserRegistrationForm()
    context ={
        'form': form
    }
    return render(request, 'register.html', context)

def login(request):
    form = forms.UserLoginForm
    context ={
        'form': form
    }
    return render(request, 'login.html', context )

def cart(request):
    return render(request, 'cart.html' )

def forgot_password(request):
    return render(request, 'password.html')

def bookpage(request):
    return render(request, 'bookpage.html') 