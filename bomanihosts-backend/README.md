# BomaniHosts Backend

Django REST Framework backend for the BomaniHosts rental platform.

## Features

- User registration and JWT authentication
- Contact form with email notifications
- Secure environment-based configuration
- PostgreSQL database support
- Rate limiting on sensitive endpoints
- CORS protection
- Comprehensive error handling

## Tech Stack

- Python 3.11+
- Django 4.x
- Django REST Framework
- PostgreSQL
- JWT Authentication (Simple JWT)

## Local Development Setup

### Prerequisites

- Python 3.11 or higher
- PostgreSQL (or use Docker)
- pip

### Installation

1. **Clone and navigate to backend directory:**
```bash
cd bomani-backend
```

2. **Create virtual environment:**
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. **Install dependencies:**
```bash
pip install -r requirements.txt
```

4. **Create `.env` file:**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
SECRET_KEY=your-secret-key-here
DEBUG=True
DATABASE_URL=postgresql://user:password@localhost:5432/bomani_db
# Or for SQLite in development:
# DATABASE_URL=sqlite:///db.sqlite3

ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

# Email settings (console backend for development)
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
DEFAULT_FROM_EMAIL=noreply@bomanihosts.com
ADMIN_EMAIL=support@bomanihosts.com
```

5. **Run migrations:**
```bash
python manage.py migrate
```

6. **Create superuser:**
```bash
python manage.py createsuperuser
```

7. **Run development server:**
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`

## Docker Setup

Using docker-compose from the root directory:

```bash
docker-compose up -d backend db
```

## API Endpoints

### Authentication

- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - Login (returns JWT tokens)
- `POST /api/auth/token/refresh/` - Refresh access token
- `GET /api/auth/me/` - Get current user (requires auth)

### Contact

- `POST /api/contact/` - Submit contact form

### Example Requests

**Register:**
```bash
curl -X POST http://localhost:8000/api/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "joseph",
    "email": "joseph@example.com",
    "password": "SecurePass123!",
    "password2": "SecurePass123!"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "joseph",
    "password": "SecurePass123!"
  }'
```

**Contact Form:**
```bash
curl -X POST http://localhost:8000/api/contact/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+254712345678",
    "subject": "Booking Inquiry",
    "message": "I am interested in a 2-bedroom apartment."
  }'
```

## Testing

Run tests:
```bash
pytest
```

With coverage:
```bash
coverage run -m pytest
coverage report
```

## Project Structure

```
bomani-backend/
├── bomani_backend/
│   ├── settings.py          # Main settings
│   ├── urls.py              # Root URL config
│   └── wsgi.py
├── apps/
│   ├── users/
│   │   ├── models.py        # Custom User model
│   │   ├── serializers.py   # User serializers
│   │   ├── views.py         # Auth views
│   │   └── urls.py
│   ├── contact/
│   │   ├── models.py        # ContactMessage model
│   │   ├── serializers.py
│   │   ├── views.py         # Contact form handler
│   │   └── urls.py
│   └── listings/           # (Optional/future)
├── requirements.txt
├── Dockerfile
├── .env.example
└── manage.py
```

## Deployment

### Render/Railway/DigitalOcean

1. **Set environment variables on your platform:**
   - `SECRET_KEY` - Generate a secure key
   - `DEBUG=False`
   - `DATABASE_URL` - Provided by managed PostgreSQL
   - `ALLOWED_HOSTS` - Your domain
   - `CORS_ALLOWED_ORIGINS` - Your frontend URL
   - Email settings for production

2. **Build command:**
   ```bash
   pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate
   ```

3. **Start command:**
   ```bash
   gunicorn bomani_backend.wsgi:application
   ```

4. **Create superuser after deployment:**
   ```bash
   python manage.py createsuperuser
   ```

### Security Checklist

- [ ] Set strong `SECRET_KEY`
- [ ] `DEBUG=False` in production
- [ ] Configure `ALLOWED_HOSTS`
- [ ] Restrict `CORS_ALLOWED_ORIGINS`
- [ ] Use HTTPS (SSL/TLS)
- [ ] Set up managed PostgreSQL
- [ ] Configure email provider (Mailgun, SendGrid, etc.)
- [ ] Enable logging/monitoring (Sentry)
- [ ] Regular security updates

## Environment Variables Reference

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `SECRET_KEY` | Yes | - | Django secret key |
| `DEBUG` | No | False | Debug mode |
| `DATABASE_URL` | Yes | - | Database connection string |
| `ALLOWED_HOSTS` | Yes | - | Comma-separated hostnames |
| `CORS_ALLOWED_ORIGINS` | Yes | - | Comma-separated frontend URLs |
| `EMAIL_BACKEND` | No | console | Email backend class |
| `EMAIL_HOST` | No | localhost | SMTP host |
| `EMAIL_PORT` | No | 587 | SMTP port |
| `EMAIL_HOST_USER` | No | - | SMTP username |
| `EMAIL_HOST_PASSWORD` | No | - | SMTP password |
| `DEFAULT_FROM_EMAIL` | No | noreply@bomanihosts.com | From email |
| `ADMIN_EMAIL` | No | support@bomanihosts.com | Admin notification email |

## Support

For issues or questions, contact support@bomanihosts.com