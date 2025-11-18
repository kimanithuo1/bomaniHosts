# BomaniHosts - Complete Project Structure

## 📁 Full Directory Tree

```
bomanihosts/                          # Root project directory
│
├── 📄 README.md                      # Main project documentation
├── 📄 COMPLETE_SETUP_GUIDE.md        # Detailed setup instructions
├── 📄 PROJECT_STRUCTURE.md           # This file
├── 📄 .gitignore                     # Git ignore rules
├── 📄 docker-compose.yml             # Docker orchestration
├── 📄 QUICKSTART.sh                  # Automated setup script
│
├── 📁 bomani-backend/                # Django backend application
│   │
│   ├── 📁 bomani_backend/            # Main Django project folder
│   │   ├── 📄 __init__.py
│   │   ├── 📄 settings.py            # ⭐ Django settings (security, DB, CORS)
│   │   ├── 📄 urls.py                # ⭐ Main URL routing
│   │   ├── 📄 wsgi.py                # WSGI for deployment
│   │   └── 📄 asgi.py                # ASGI for async
│   │
│   ├── 📁 apps/                      # Django apps
│   │   ├── 📄 __init__.py
│   │   │
│   │   ├── 📁 users/                 # User authentication app
│   │   │   ├── 📄 __init__.py
│   │   │   ├── 📄 admin.py
│   │   │   ├── 📄 apps.py
│   │   │   ├── 📄 models.py          # ⭐ Custom User model
│   │   │   ├── 📄 serializers.py     # ⭐ User serializers
│   │   │   ├── 📄 views.py           # ⭐ Auth views (register, login)
│   │   │   ├── 📄 urls.py            # ⭐ Auth URL patterns
│   │   │   ├── 📄 tests.py           # User tests
│   │   │   └── 📁 migrations/
│   │   │       └── 📄 __init__.py
│   │   │
│   │   ├── 📁 contact/               # Contact form app
│   │   │   ├── 📄 __init__.py
│   │   │   ├── 📄 admin.py
│   │   │   ├── 📄 apps.py
│   │   │   ├── 📄 models.py          # ⭐ ContactMessage model
│   │   │   ├── 📄 serializers.py     # ⭐ Contact serializers
│   │   │   ├── 📄 views.py           # ⭐ Contact form handler
│   │   │   ├── 📄 urls.py            # Contact URL patterns
│   │   │   ├── 📄 tests.py           # Contact tests
│   │   │   └── 📁 migrations/
│   │   │       └── 📄 __init__.py
│   │   │
│   │   └── 📁 listings/              # Listings app (future)
│   │       ├── 📄 __init__.py
│   │       ├── 📄 admin.py
│   │       ├── 📄 apps.py
│   │       ├── 📄 models.py          # Listing models
│   │       ├── 📄 serializers.py
│   │       ├── 📄 views.py
│   │       ├── 📄 urls.py
│   │       └── 📁 migrations/
│   │           └── 📄 __init__.py
│   │
│   ├── 📁 media/                     # Uploaded media files
│   ├── 📁 staticfiles/               # Collected static files
│   │
│   ├── 📄 manage.py                  # ⭐ Django management script
│   ├── 📄 requirements.txt           # ⭐ Python dependencies
│   ├── 📄 Dockerfile                 # ⭐ Docker build instructions
│   ├── 📄 .env.example               # ⭐ Environment variables template
│   ├── 📄 .env                       # ⚠️  Environment variables (gitignored)
│   ├── 📄 pytest.ini                 # Pytest configuration
│   └── 📄 README.md                  # Backend documentation
│
└── 📁 bomani-frontend/               # React frontend application
    │
    ├── 📁 public/                    # Static public assets
    │   ├── 📄 vite.svg
    │   └── 📄 favicon.ico
    │
    ├── 📁 src/                       # Source code
    │   │
    │   ├── 📁 api/                   # API configuration
    │   │   └── 📄 config.js          # ⭐ Axios setup with interceptors
    │   │
    │   ├── 📁 components/            # Reusable components
    │   │   ├── 📄 Navbar.jsx         # ⭐ Navigation bar
    │   │   ├── 📄 Footer.jsx         # ⭐ Footer component
    │   │   ├── 📄 ContactForm.jsx    # ⭐ Contact form with validation
    │   │   ├── 📄 ListingCard.jsx    # ⭐ Listing card component
    │   │   └── 📄 SEO.jsx            # ⭐ SEO meta tags component
    │   │
    │   ├── 📁 context/               # React Context
    │   │   └── 📄 AuthContext.jsx    # ⭐ Authentication context
    │   │
    │   ├── 📁 pages/                 # Page components
    │   │   ├── 📄 Home.jsx           # ⭐ Home/landing page
    │   │   ├── 📄 Listings.jsx       # ⭐ Listings grid page
    │   │   ├── 📄 ListingDetail.jsx  # ⭐ Single listing view
    │   │   ├── 📄 FAQ.jsx            # ⭐ FAQ with JSON-LD
    │   │   ├── 📄 Contact.jsx        # ⭐ Contact page
    │   │   ├── 📄 Register.jsx       # ⭐ User registration
    │   │   ├── 📄 Login.jsx          # ⭐ User login
    │   │   └── 📄 NotFound.jsx       # ⭐ 404 page
    │   │
    │   ├── 📄 App.jsx                # ⭐ Main app component with routing
    │   ├── 📄 main.jsx               # ⭐ React entry point
    │   └── 📄 index.css              # ⭐ Global styles with Tailwind
    │
    ├── 📄 index.html                 # ⭐ HTML entry point
    ├── 📄 package.json               # ⭐ Node dependencies & scripts
    ├── 📄 package-lock.json          # Lock file for dependencies
    ├── 📄 vite.config.js             # ⭐ Vite configuration
    ├── 📄 tailwind.config.js         # ⭐ Tailwind CSS config (brand colors)
    ├── 📄 postcss.config.js          # PostCSS configuration
    ├── 📄 .env.example               # ⭐ Environment variables template
    ├── 📄 .env.local                 # ⚠️  Environment variables (gitignored)
    ├── 📄 .eslintrc.cjs              # ESLint configuration
    ├── 📄 Dockerfile.dev             # Docker for development
    └── 📄 README.md                  # Frontend documentation
```

## 📝 File Descriptions

### ⭐ Critical Files (Must Have)

These files are essential for the application to work:

#### Backend Critical Files
- **`manage.py`** - Django's command-line utility
- **`settings.py`** - All Django configuration
- **`urls.py`** - URL routing
- **`requirements.txt`** - Python package dependencies
- **`models.py`** (in each app) - Database models
- **`serializers.py`** - API serialization
- **`views.py`** - Request handlers
- **`.env`** - Environment configuration

#### Frontend Critical Files
- **`package.json`** - Node dependencies and scripts
- **`vite.config.js`** - Vite build tool config
- **`tailwind.config.js`** - Styling configuration
- **`App.jsx`** - Main application component
- **`main.jsx`** - React entry point
- **`index.html`** - HTML template
- **`config.js`** (in api/) - API client setup
- **`.env.local`** - Environment variables

## 🗂️ File Creation Order

### Backend Setup Order

1. **Project Structure**
   ```bash
   mkdir -p bomani-backend/bomani_backend
   mkdir -p bomani-backend/apps/{users,contact,listings}
   ```

2. **Core Django Files** (in order)
   - `manage.py`
   - `bomani_backend/__init__.py`
   - `bomani_backend/settings.py`
   - `bomani_backend/urls.py`
   - `bomani_backend/wsgi.py`

3. **App Files** (for each app)
   - `apps/users/__init__.py`
   - `apps/users/models.py`
   - `apps/users/serializers.py`
   - `apps/users/views.py`
   - `apps/users/urls.py`
   - (Repeat for contact and listings apps)

4. **Configuration**
   - `requirements.txt`
   - `.env.example`
   - `.env`
   - `Dockerfile`

### Frontend Setup Order

1. **Project Initialization**
   ```bash
   npm create vite@latest bomani-frontend -- --template react
   cd bomani-frontend
   npm install
   ```

2. **Configuration Files**
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.env.example`
   - `.env.local`

3. **Directory Structure**
   ```bash
   mkdir -p src/{api,components,context,pages}
   ```

4. **Core Files**
   - `src/main.jsx`
   - `src/index.css`
   - `src/App.jsx`

5. **API Configuration**
   - `src/api/config.js`

6. **Context**
   - `src/context/AuthContext.jsx`

7. **Components** (in order)
   - `src/components/SEO.jsx` (no dependencies)
   - `src/components/Navbar.jsx` (uses AuthContext)
   - `src/components/Footer.jsx` (no dependencies)
   - `src/components/ContactForm.jsx` (uses api)
   - `src/components/ListingCard.jsx` (no dependencies)

8. **Pages** (in order)
   - `src/pages/NotFound.jsx`
   - `src/pages/Home.jsx`
   - `src/pages/Register.jsx`
   - `src/pages/Login.jsx`
   - `src/pages/Contact.jsx`
   - `src/pages/FAQ.jsx`
   - `src/pages/Listings.jsx`
   - `src/pages/ListingDetail.jsx`

## 📦 Installation Commands by Section

### Backend Dependencies
```bash
cd bomani-backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend Dependencies
```bash
cd bomani-frontend
npm install
```

### Additional Tools
```bash
# Backend testing
pip install pytest pytest-django pytest-cov

# Frontend testing
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Code formatting
pip install black flake8
npm install -D eslint
```

## 🔗 File Dependencies

### Backend Dependencies Map
```
settings.py
  ↓ imports from
models.py (each app)
  ↓ used by
serializers.py
  ↓ used by
views.py
  ↓ registered in
urls.py (each app)
  ↓ included in
urls.py (main)
```

### Frontend Dependencies Map
```
main.jsx
  ↓ imports
App.jsx
  ↓ imports
AuthContext.jsx
  ↓ used by
pages/*.jsx & components/*.jsx
  ↓ imports
api/config.js
```

## 💾 Important Notes

1. **Never commit `.env` files** - Always use `.env.example` as template
2. **Run migrations** after creating/modifying models
3. **Restart servers** after changing configuration files
4. **Install dependencies** when package files change
5. **Create __init__.py** in every Python package directory

## 🔄 Common File Updates

When you need to add a new feature, you'll typically update:

**Backend:**
1. `models.py` - Add/modify database models
2. `serializers.py` - Add serialization logic
3. `views.py` - Add API endpoints
4. `urls.py` - Register new routes
5. Run `python manage.py makemigrations` and `migrate`

**Frontend:**
1. Create new page in `src/pages/`
2. Add route in `App.jsx`
3. Create components in `src/components/` if needed
4. Update API calls in `src/api/` if needed

## ✅ Verification Checklist

After setting up, verify these files exist:

**Backend:**
- [ ] `manage.py`
- [ ] `bomani_backend/settings.py`
- [ ] `apps/users/models.py`
- [ ] `apps/contact/models.py`
- [ ] `requirements.txt`
- [ ] `.env` (with your secrets)

**Frontend:**
- [ ] `package.json`
- [ ] `src/main.jsx`
- [ ] `src/App.jsx`
- [ ] `tailwind.config.js`
- [ ] `.env.local` (with API URL)
- [ ] All page files in `src/pages/`
- [ ] All component files in `src/components/`

---

**📚 For detailed setup instructions, see `COMPLETE_SETUP_GUIDE.md`**