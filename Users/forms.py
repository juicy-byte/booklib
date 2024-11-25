from django import forms 
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from . import models

class UserRegistrationForm(UserCreationForm):
    is_author = forms.BooleanField(required=False, label='Are you an Author?')
    class Meta:
        model = models.CustomUser
        fields = ("email", "is_author", "username", 'first_name', 'last_name', 'password1', 'password2')

class UserLoginForm(AuthenticationForm):
    username = forms.EmailField()