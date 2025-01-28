# blog_api/serializers.py
from rest_framework import serializers
from apps.blog.models import Blog, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class BlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, required=False)
    author_username = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = Blog
        fields = [
            'id',
            'title',
            'content',
            'summary',
            'author',
            'author_username',
            'tags',
            'created_at',
            'updated_at',
            'status'
        ]
        read_only_fields = ['author', 'created_at', 'updated_at']
