
from django.urls import path
from . import views
app_name = 'bookApp'

urlpatterns = [
    path('', views.homePage, name='home' )

    
]