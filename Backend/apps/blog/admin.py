from django.contrib import admin

# Register your models here.
from .models import Tag, Blog
admin.site.register(Tag)
admin.site.register(Blog)

