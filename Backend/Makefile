.PHONY: build up down logs shell migrate makemigrations createsuperuser test lint clean help

# Default target
.DEFAULT_GOAL := help

# Variables
CONTAINER_NAME = backend
DOCKER_COMPOSE = docker-compose

help: ## Show this help message
	@echo 'Usage:'
	@echo '  make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build or rebuild services
	$(DOCKER_COMPOSE) build

up: ## Create and start containers
	$(DOCKER_COMPOSE) up

up-d: ## Create and start containers in detached mode
	$(DOCKER_COMPOSE) up -d

down: ## Stop and remove containers
	$(DOCKER_COMPOSE) down

logs: ## View output from containers
	$(DOCKER_COMPOSE) logs -f

shell: ## Open a shell in the backend container
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) /bin/bash || $(DOCKER_COMPOSE) exec $(CONTAINER_NAME) /bin/sh

migrate: ## Run Django migrations
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py migrate

makemigrations: ## Create new Django migrations
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py makemigrations

createsuperuser: ## Create a Django superuser
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py createsuperuser

test: ## Run Django tests
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py test

clean: ## Remove all containers and volumes
	$(DOCKER_COMPOSE) down -v
	docker system prune -f

restart: down up ## Restart all containers

ps: ## Show running containers
	$(DOCKER_COMPOSE) ps

collectstatic: ## Collect Django static files
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py collectstatic --noinput

shell-plus: ## Run Django shell_plus if installed
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python manage.py shell_plus

lint: ## Run code linting
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python -m black .
	$(DOCKER_COMPOSE) exec $(CONTAINER_NAME) python -m flake8 .
