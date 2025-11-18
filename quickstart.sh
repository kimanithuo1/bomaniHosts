#!/bin/bash

# BomaniHosts Quick Start Script
# This script automates the setup process for development

set -e  # Exit on error

echo "🚀 BomaniHosts Setup Script"
echo "============================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Docker is running
if command -v docker &> /dev/null && docker info &> /dev/null; then
    echo -e "${GREEN}✓ Docker is running${NC}"
    USE_DOCKER=true
else
    echo -e "${YELLOW}! Docker not found or not running. Will use manual setup.${NC}"
    USE_DOCKER=false
fi

if [ "$USE_DOCKER" = true ]; then
    echo ""
    echo "🐳 Starting with Docker..."
    echo ""
    
    # Start Docker services
    docker-compose up -d
    
    echo "⏳ Waiting for services to start..."
    sleep 10
    
    # Run migrations
    echo "📦 Running database migrations..."
    docker-compose exec -T backend python manage.py migrate
    
    echo ""
    echo -e "${GREEN}✅ Setup complete!${NC}"
    echo ""
    echo "Access your application:"
    echo "  Frontend:  http://localhost:5173"
    echo "  Backend:   http://localhost:8000/api"
    echo "  Admin:     http://localhost:8000/admin"
    echo ""
    echo "Create a superuser with:"
    echo "  docker-compose exec backend python manage.py createsuperuser"
    echo ""
    echo "View logs with:"
    echo "  docker-compose logs -f"
    
else
    echo ""
    echo "🔧 Manual setup process..."
    echo ""
    
    # Backend Setup
    echo "📦 Setting up Backend..."
    cd bomani-backend
    
    # Check Python
    if ! command -v python3 &> /dev/null; then
        echo -e "${RED}✗ Python 3 not found. Please install Python 3.11+${NC}"
        exit 1
    fi
    
    # Create virtual environment
    if [ ! -d ".venv" ]; then
        echo "Creating virtual environment..."
        python3 -m venv .venv
    fi
    
    # Activate virtual environment
    source .venv/bin/activate
    
    # Install dependencies
    echo "Installing Python dependencies..."
    pip install --upgrade pip
    pip install -r requirements.txt
    
    # Create .env if it doesn't exist
    if [ ! -f ".env" ]; then
        echo "Creating .env file..."
        cp .env.example .env
        
        # Generate SECRET_KEY
        SECRET_KEY=$(python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())")
        sed -i "s/your-secret-key-here/$SECRET_KEY/" .env
        
        echo "Using SQLite for development..."
        sed -i "s|DATABASE_URL=postgresql://.*|DATABASE_URL=sqlite:///db.sqlite3|" .env
    fi
    
    # Run migrations
    echo "Running migrations..."
    python manage.py migrate
    
    # Start backend in background
    echo "Starting backend server..."
    python manage.py runserver > /dev/null 2>&1 &
    BACKEND_PID=$!
    echo "Backend started with PID: $BACKEND_PID"
    
    cd ..
    
    # Frontend Setup
    echo ""
    echo "📦 Setting up Frontend..."
    cd bomani-frontend
    
    # Check Node
    if ! command -v node &> /dev/null; then
        echo -e "${RED}✗ Node.js not found. Please install Node.js 18+${NC}"
        kill $BACKEND_PID
        exit 1
    fi
    
    # Install dependencies
    if [ ! -d "node_modules" ]; then
        echo "Installing Node dependencies..."
        npm install
    fi
    
    # Create .env.local if it doesn't exist
    if [ ! -f ".env.local" ]; then
        echo "Creating .env.local file..."
        cp .env.example .env.local
    fi
    
    # Start frontend
    echo "Starting frontend server..."
    npm run dev > /dev/null 2>&1 &
    FRONTEND_PID=$!
    echo "Frontend started with PID: $FRONTEND_PID"
    
    cd ..
    
    echo ""
    echo -e "${GREEN}✅ Setup complete!${NC}"
    echo ""
    echo "Access your application:"
    echo "  Frontend:  http://localhost:5173"
    echo "  Backend:   http://localhost:8000/api"
    echo "  Admin:     http://localhost:8000/admin"
    echo ""
    echo "Create a superuser:"
    echo "  cd bomani-backend"
    echo "  source .venv/bin/activate"
    echo "  python manage.py createsuperuser"
    echo ""
    echo "To stop the servers:"
    echo "  kill $BACKEND_PID $FRONTEND_PID"
    echo ""
    echo "Process IDs saved to .pids file"
    echo "$BACKEND_PID $FRONTEND_PID" > .pids
fi

echo ""
echo "🎉 Happy coding!"