FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    netcat-traditional \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python packages
COPY requirements/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Make scripts directory and set permissions
RUN chmod -R 755 ./scripts \
    && chmod +x ./scripts/auto_deploy.sh
# Set the entrypoint
ENTRYPOINT ["/app/scripts/auto_deploy.sh"]
