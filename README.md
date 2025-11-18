# BomaniHosts - Rental Platform for Kenya

A modern, full-stack web application for short and medium-term rental listings across Kenya. Built with React, Django REST Framework, and PostgreSQL.

## 🚀 Features

### User Features
- Browse verified rental listings
- Contact property owners via secure contact form
- User registration and JWT authentication
- Responsive design for mobile and desktop
- SEO-optimized pages with structured data

### Technical Features
- RESTful API with Django REST Framework
- JWT token authentication with automatic refresh
- Rate-limited contact form to prevent spam
- Email notifications for contact submissions
- CORS protection and secure settings
- Docker support for easy local development
- CI/CD pipeline with GitHub Actions

## 🛠️ Tech Stack

### Frontend
- React 18 with Vite
- React Router v6 for routing
- Tailwind CSS v3 for styling
- Axios for API requests
- Vitest for testing

### Backend
- Python 3.11+
- Django 4.x
- Django REST Framework
- PostgreSQL
- JWT authentication (Simple JWT)
- Docker & Docker Compose

## 📋 Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 15+ (or use Docker)
- Git

## 🚀 Quick Start with Docker

The easiest way to get started is using Docker Compose:

```bash
# Clone the repository
git clone https://github.com/yourusername/bomanihosts.git
cd bomanihosts

# Start all services
docker-compose up -d

# Create Django superuser
docker-compose exec backend python manage.py createsuperuser

# Access the application
# Frontend: http://localhost:5173
# Backend API: http://localhost:8000/api
# Django Admin: http://localhost:8000/admin
```

## 💻 Local Development Setup

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd bomani-backend
```

2. **Create and activate virtual environment:**
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Create `.env` file:**
```bash
cp .env.example .env
```

Edit `.env`:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
DATABASE_URL=postgresql://user:password@localhost:5432/bomani_db
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
```

5. **Run migrations:**
```bash
python manage.py migrate
```

6. **Create superuser:**
```bash
python manage.py createsuperuser
```

7. **Start development server:**
```bash
python manage.py runserver
```

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd bomani-frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env.local` file:**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_IMG_CDN=http://localhost:8000/media
```

4. **Start development server:**
```bash
npm run dev
```

Visit http://localhost:5173 to see the app!

## 📁 Project Structure

```
bomanihosts/
├── bomani-backend/           # Django backend
│   ├── apps/
│   │   ├── users/           # User authentication
│   │   ├── contact/         # Contact form
│   │   └── listings/        # Listings (future)
│   ├── bomani_backend/
│   │   ├── settings.py      # Django settings
│   │   └── urls.py          # URL routing
│   ├── requirements.txt
│   ├── Dockerfile
│   └── README.md
│
├── bomani-frontend/          # React frontend
│   ├── src/
│   │   ├── api/             # API configuration
│   │   ├── components/      # Reusable components
│   │   ├── context/         # React Context (Auth)
│   │   ├── pages/           # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci.yml           # CI/CD pipeline
└── README.md
```

## 🎨 Brand Colors

The BomaniHosts brand uses a warm, inviting color palette:

- **Primary (Warm Coral)**: `#EF9587`
- **Secondary (Soft Peach)**: `#EEC3B4`
- **Background (Cream White)**: `#FEFBF3`
- **Accent (Deep Teal)**: `#285D66`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - Login (returns JWT tokens)
- `POST /api/auth/token/refresh/` - Refresh access token
- `GET /api/auth/me/` - Get current user profile

### Contact
- `POST /api/contact/` - Submit contact form

### Example API Usage

**Register a new user:**
```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "email": "john@example.com",
    "password": "SecurePass123!",
    "password2": "SecurePass123!"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "password": "SecurePass123!"
  }'
```

## 🧪 Testing

### Backend Tests
```bash
cd bomani-backend
pytest
# With coverage
pytest --cov=. --cov-report=html
```

### Frontend Tests
```bash
cd bomani-frontend
npm run test
```

## 🚢 Deployment

### Backend Deployment (Render/Railway)

1. **Connect your GitHub repository**
2. **Set environment variables:**
   - `SECRET_KEY` (generate secure key)
   - `DEBUG=False`
   - `DATABASE_URL` (provided by platform)
   - `ALLOWED_HOSTS=your-domain.com`
   - `CORS_ALLOWED_ORIGINS=https://your-frontend.com`
   - Email settings (SMTP credentials)

3. **Build command:**
```bash
pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
```

4. **Start command:**
```bash
gunicorn bomani_backend.wsgi:application
```

### Frontend Deployment (Vercel)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
cd bomani-frontend
vercel
```

3. **Set environment variables in Vercel dashboard:**
   - `VITE_API_BASE_URL=https://your-api-domain.com/api`
   - `VITE_IMG_CDN=https://your-cdn-url.com`

## 🔒 Security Checklist

- [x] Environment-based secrets management
- [x] CORS restricted to allowed origins
- [x] CSRF protection enabled
- [x] Rate limiting on contact form
- [x] SQL injection protection (Django ORM)
- [x] XSS protection
- [x] Secure password hashing
- [x] HTTPS enforcement in production
- [x] Secure cookie settings
- [ ] Regular dependency updates
- [ ] Security monitoring (Sentry)

## 📝 Environment Variables

### Backend (.env)
```env
SECRET_KEY=                  # Django secret key
DEBUG=False                  # Debug mode
DATABASE_URL=               # PostgreSQL connection string
ALLOWED_HOSTS=              # Comma-separated hostnames
CORS_ALLOWED_ORIGINS=       # Frontend URLs
EMAIL_BACKEND=              # Email backend class
EMAIL_HOST=                 # SMTP host
EMAIL_PORT=587              # SMTP port
EMAIL_HOST_USER=            # SMTP username
EMAIL_HOST_PASSWORD=        # SMTP password
DEFAULT_FROM_EMAIL=         # From email address
ADMIN_EMAIL=                # Admin notification email
```

### Frontend (.env.local)
```env
VITE_API_BASE_URL=          # Backend API URL
VITE_IMG_CDN=               # Image CDN URL (Cloudinary/Cloudflare)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Workflow

1. Create a new branch from `develop`
2. Make your changes
3. Ensure tests pass: `pytest` (backend) and `npm test` (frontend)
4. Ensure linting passes: `black .` and `flake8` (backend), `npm run lint` (frontend)
5. Submit PR to `develop` branch

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Development Team**: Bomanidevs
- **Support**: support@bomanihosts.com

## 🙏 Acknowledgments

- Django REST Framework for the excellent API framework
- React and Vite for the modern frontend tooling
- Tailwind CSS for the utility-first styling approach
- The open-source community for all the amazing tools

## 📚 Additional Documentation

- [Backend Documentation](./bomani-backend/README.md)
- [Frontend Documentation](./bomani-frontend/README.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🐛 Known Issues

- None at the moment

## 🗺️ Roadmap

- [ ] Add listings CRUD operations
- [ ] Implement image upload with Cloudinary
- [ ] Add favorites/bookmarks feature
- [ ] Implement real-time messaging
- [ ] Add payment integration
- [ ] Mobile app (React Native)
- [ ] Advanced search and filters
- [ ] Reviews and ratings system

## 💬 Support

For support, email support@bomanihosts.com or join our Slack channel.

---

**Built with ❤️ for the Kenyan rental market**
