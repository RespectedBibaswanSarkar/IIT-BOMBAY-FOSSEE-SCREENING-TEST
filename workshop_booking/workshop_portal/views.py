# Django Imports
from django.shortcuts import render, redirect
from django.urls import reverse
from django.conf import settings

# Local Imports
from cms.models import Page


def index(request):
    """Render the modern home page with login options and navigation"""
    return render(request, 'workshop_app/home.html')
