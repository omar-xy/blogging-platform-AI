# blog_api/serializers.py
from rest_framework import serializers
from apps.blog.models import Blog, Tag

class TagSerializer(serializers.ModelSerializer):
    # Meta class defines the configuration for the serializer
    # - model: specifies which Django model to serialize
    # - fields: lists which model fields to include in the serialization
    class Meta:
        model = Tag
        fields = ['id', 'name']

class BlogSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, required=False, read_only=True)
    author_username = serializers.CharField(source='author.username', read_only=True)

    # Meta class configures the serializer:
    # - model: specifies the Blog model to serialize
    # - fields: defines all fields to include in the serialization/deserialization
    # - read_only_fields: fields that should not be modified during deserialization
    #   (they are included in output but ignored in input)
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
        read_only_fields = ['created_at', 'updated_at', 'author']

    def create(self, validated_data):
        # Get tags from initial data
        tags_data = self.initial_data.get('tags', [])
        
        # Create blog instance with current user as author
        blog = Blog.objects.create(
            author=self.context['request'].user,
            **validated_data
        )
        
        # Process tags
        for tag_data in tags_data:
            tag_name = tag_data.get('name', '').strip().lower()
            if tag_name:
                tag, _ = Tag.objects.get_or_create(name=tag_name)
                blog.tags.add(tag)
        
        return blog
