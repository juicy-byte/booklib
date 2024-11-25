
from django.http import HttpResponse
from django.shortcuts import render


def homePage(requests):
    return render (requests, 'index.html')

