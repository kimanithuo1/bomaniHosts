# BomaniHosts - Complete Setup Guide
## From Zero to Running Application

This guide will walk you through setting up the entire BomaniHosts platform from scratch, including both frontend and backend.

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.11 or higher) - [Download](https://python.org/)
- **PostgreSQL** (v15 or higher) - [Download](https://postgresql.org/) OR use Docker
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### Optional but Recommended
- **Docker Desktop** - [Download](https://docker.com/) (easiest setup method)
- **Postman** - For API testing

### Verify Installations
```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show v9.x.x or higher
python --version  # Should show 3.11.x or higher
git --version     # Should show 2.x.x or higher
psql --version    # Should show 15.x or higher
```

---

## 🚀 Method 1: Quick Start with Docker (Recommended)

This is the fastest way to get everything running.

### Step 1: Create Project Directory
```bash
# Create main project folder
mkdir bomanihosts
cd bomanihosts

# Create subdirectories
mkdir bomani-backend bomani-frontend
```

### Step 2: Download All Project Files

Download and place all the files from the artifacts in their respective folders:

**Root Directory (`bomanihosts/`):**
- `docker-compose.yml`
- `README.md`
- `.gitignore`

**Backend Directory (`bomani-backend/`):**
- `requirements.txt`
- `Dockerfile`
- `manage.py`
- `bomani_backend/settings.py`
- `bomani_backend/urls.py`
- `bomani_backend/wsgi.py`
- `bomani_backend/__init__.py`
- `apps/users/` (all files)
- `apps/contact/` (all files)
- `.env.example`
- `README.md`

**Frontend Directory (`bomani-frontend/`):**
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `index.html`
- `src/` (all files and folders)
- `.env.example`
- `README.md`

### Step 3: Start Everything with Docker

```bash
# From the root bomanihosts directory
docker-compose up -d

# Check if all containers are running
docker-compose ps

# View logs
docker-compose logs -f
```

### Step 4: Initialize Database

```bash
# Run migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser
```

### Step 5: Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin

**Done!** 🎉 Your application is now running.

---

## 🛠️ Method 2: Manual Setup (Without Docker)

### Part A: Backend Setup (Django)

#### Step 1: Set Up PostgreSQL Database

**Option 1: Using PostgreSQL directly**
```bash
# Start PostgreSQL service
# On Ubuntu/Debian:
sudo service postgresql start

# On macOS with Homebrew:
brew services start postgresql

# Create database and user
psql postgres
```

In PostgreSQL shell:
```sql
CREATE DATABASE bomani_db;
CREATE USER bomani_user WITH PASSWORD 'your_secure_password';
ALTER ROLE bomani_user SET client_encoding TO 'utf8';
ALTER ROLE bomani_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE bomani_user SET timezone TO 'Africa/Nairobi';
GRANT ALL PRIVILEGES ON DATABASE bomani_db TO bomani_user;
\q
```

**Option 2: Use SQLite for development (easier)**
- Skip PostgreSQL setup
- Use `DATABASE_URL=sqlite:///db.sqlite3` in `.env` file

#### Step 2: Set Up Python Environment

```bash
cd bomani-backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On macOS/Linux:
source .venv/bin/activate

# On Windows:
.venv\Scripts\activate

# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

#### Step 3: Configure Environment Variables

Create `.env` file in `bomani-backend/`:

```bash
# Copy example file
cp .env.example .env

# Edit .env file
nano .env  # or use your editor
```

**For PostgreSQL:**
```env
SECRET_KEY=django-insecure-your-secret-key-here-change-this
DEBUG=True
DATABASE_URL=postgresql://bomani_user:your_secure_password@localhost:5432/bomani_db
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# Email settings (console for development)
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
DEFAULT_FROM_EMAIL=noreply@bomanihosts.com
ADMIN_EMAIL=support@bomanihosts.com
```

**For SQLite (easier for development):**
```env
SECRET_KEY=django-insecure-your-secret-key-here-change-this
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# Email settings
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
DEFAULT_FROM_EMAIL=noreply@bomanihosts.com
ADMIN_EMAIL=support@bomanihosts.com
```

**Generate a secure SECRET_KEY:**
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

#### Step 4: Create Django Project Structure

Create all the necessary app directories and files:

```bash
# Create apps directory
mkdir -p apps/users apps/contact apps/listings

# Create __init__.py files
touch apps/__init__.py
touch apps/users/__init__.py
touch apps/contact/__init__.py
touch apps/listings/__init__.py

# Create main project directory
mkdir -p bomani_backend
touch bomani_backend/__init__.py
```

#### Step 5: Run Migrations

```bash
# Make sure you're in bomani-backend with venv activated

# Make migrations
python manage.py makemigrations

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
# Follow prompts to create admin user
```

#### Step 6: Test Backend

```bash
# Start development server
python manage.py runserver

# Server should start at http://127.0.0.1:8000
```

Test in browser or with curl:
```bash
# Test API endpoint
curl http://localhost:8000/api/auth/register/
```

---

### Part B: Frontend Setup (React + Vite)

#### Step 1: Initialize React Project

```bash
# Navigate to frontend directory
cd ../bomani-frontend

# Initialize npm (if package.json doesn't exist)
npm init -y

# Install dependencies
npm install
```

If starting completely from scratch:
```bash
# Create Vite React project
npm create vite@latest . -- --template react

# Install all dependencies from package.json
npm install

# Install additional dependencies
npm install react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

#### Step 2: Configure Tailwind CSS

```bash
# Initialize Tailwind (creates config files)
npx tailwindcss init -p
```

Replace `tailwind.config.js` content with the provided configuration (with Bomani colors).

Create `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 3: Configure Environment Variables

Create `.env.local` file in `bomani-frontend/`:

```bash
# Copy example
cp .env.example .env.local

# Edit file
nano .env.local
```

Content:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_IMG_CDN=http://localhost:8000/media
```

#### Step 4: Create Project Structure

```bash
# Create directory structure
mkdir -p src/api src/components src/context src/pages

# You should have downloaded all the source files
# Organize them into the correct directories
```

Expected structure:
```
bomani-frontend/
├── src/
│   ├── api/
│   │   └── config.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ListingCard.jsx
│   │   └── SEO.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Listings.jsx
│   │   ├── ListingDetail.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── .env.local
```

#### Step 5: Update Entry Files

**`src/main.jsx`:**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**`index.html`:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BomaniHosts - Trusted Rentals in Kenya</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### Step 6: Start Frontend Development Server

```bash
# Make sure you're in bomani-frontend directory
npm run dev

# Server should start at http://localhost:5173
```

---

## ✅ Verification Checklist

### Backend Verification

```bash
# 1. Check if server is running
curl http://localhost:8000/api/

# 2. Test user registration
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "TestPass123!",
    "password2": "TestPass123!"
  }'

# 3. Test login
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "TestPass123!"
  }'

# 4. Access admin panel
# Go to: http://localhost:8000/admin
```

### Frontend Verification

1. Open http://localhost:5173 in browser
2. Check these pages load without errors:
   - Home page (/)
   - Listings (/listings)
   - FAQ (/faq)
   - Contact (/contact)
   - Register (/auth/register)
   - Login (/auth/login)

3. Test registration:
   - Go to /auth/register
   - Fill out form
   - Submit
   - Check Django console for success

4. Test login:
   - Go to /auth/login
   - Use credentials from registration
   - Should redirect to home with username visible

5. Test contact form:
   - Go to /contact
   - Fill and submit form
   - Check Django console for email output

---

## 🐛 Common Issues and Solutions

### Backend Issues

**Issue: `ModuleNotFoundError: No module named 'environ'`**
```bash
# Solution:
pip install django-environ
```

**Issue: Database connection errors**
```bash
# Solution 1: Use SQLite instead
# In .env: DATABASE_URL=sqlite:///db.sqlite3

# Solution 2: Check PostgreSQL is running
sudo service postgresql status
sudo service postgresql start
```

**Issue: `SECRET_KEY` not found**
```bash
# Solution: Ensure .env file exists and has SECRET_KEY
# Generate new key:
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

**Issue: Port 8000 already in use**
```bash
# Solution: Run on different port
python manage.py runserver 8001
# Update frontend .env.local accordingly
```

### Frontend Issues

**Issue: `Cannot find module 'react-router-dom'`**
```bash
# Solution:
npm install react-router-dom
```

**Issue: Tailwind classes not working**
```bash
# Solution:
# 1. Ensure tailwind.config.js has correct content paths
# 2. Restart dev server: Ctrl+C then npm run dev
# 3. Clear cache: rm -rf node_modules/.vite
```

**Issue: API calls failing with CORS errors**
```bash
# Solution:
# 1. Check backend .env has frontend URL in CORS_ALLOWED_ORIGINS
# 2. Restart backend server
# 3. Check frontend .env.local has correct VITE_API_BASE_URL
```

**Issue: 404 on page refresh**
```bash
# Solution: This is expected in development
# For production, configure your hosting platform's redirects
# Vercel/Netlify handle this automatically
```

---

## 📦 Creating .gitignore Files

**Root `.gitignore`:**
```
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
*.egg-info/
.venv/
venv/
ENV/

# Django
*.log
db.sqlite3
db.sqlite3-journal
staticfiles/
media/

# Node
node_modules/
dist/
build/
.DS_Store

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
```

---

## 🚀 Next Steps

1. **Customize branding**: Update colors, logos, images
2. **Add real data**: Create listings through Django admin
3. **Set up email**: Configure SMTP for production emails
4. **Add tests**: Write additional test cases
5. **Deploy**: Follow deployment guides for production

---

## 📞 Support

If you encounter issues:
1. Check this guide's troubleshooting section
2. Review backend/frontend README files
3. Check application logs
4. Contact support@bomanihosts.com

---

**Congratulations!** 🎉 You now have a fully functional rental platform running locally.