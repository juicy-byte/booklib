
from django.urls import path
from . import views
app_name = 'users'

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('cart/', views.cart, name='cart'),
    path('password/', views.forgot_password, name='password'),
    path('bookpage/', views.bookpage, name='bookpage')

]