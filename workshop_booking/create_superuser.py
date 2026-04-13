#!/usr/bin/env python
from django.contrib.auth import get_user_model
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'workshop_portal.settings')
django.setup()


User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print("Superuser 'admin' created successfully!")
    print("Username: admin")
    print("Password: admin123")
else:
    print("Superuser 'admin' already exists!")
