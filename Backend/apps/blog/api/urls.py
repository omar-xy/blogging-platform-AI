from django.urls import path
from .views import (
    BlogListCreateView,
    BlogDetailView,
    TagListCreateView,
    TagDetailView
)

app_name = 'blog'

urlpatterns = [
    # Blog endpoints
    path('', BlogListCreateView.as_view(), name='blog-list'),
    path('<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
    # Tag endpoints
    path('tags/', TagListCreateView.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagDetailView.as_view(), name='tag-detail'),
]
