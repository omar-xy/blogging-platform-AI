#!/bin/bash

# Wait for database to be ready
echo "Waiting for database..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 0.1
done
echo "Database is ready!"

# Make migrations for each app
echo "Making migrations for users app..."
python manage.py makemigrations users

echo "Making migrations for blog app..."
python manage.py makemigrations blog

# Run all migrations
echo "Applying migrations..."
python manage.py migrate

# Create superuser if it doesn't exist
echo "Creating superuser if not exists..."
python manage.py shell << END
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(email='admin@example.com').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
END

# Start server
echo "Starting server..."
python manage.py runserver 0.0.0.0:8000
