# BomaniHosts Frontend

React + Vite frontend for the BomaniHosts rental platform.

## Features

- Responsive design with Tailwind CSS
- User authentication (register/login)
- Contact form with validation
- Listings display
- FAQ page with SEO
- Protected routes
- JWT token management with auto-refresh

## Tech Stack

- React 18
- Vite
- React Router v6
- Axios
- Tailwind CSS v3
- Vitest (testing)

## Local Development Setup

### Prerequisites

- Node.js 18+ and npm
- Backend API running (see backend README)

### Installation

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

4. **Run development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
bomani-frontend/
├── public/
│   └── assets/           # Static assets
├── src/
│   ├── api/
│   │   └── config.js     # Axios configuration
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ListingCard.jsx
│   │   ├── SEO.jsx
│   │   └── ...
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Listings.jsx
│   │   ├── ListingDetail.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Register.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
└── .env.local
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero and featured listings |
| `/listings` | Listings | Browse all listings |
| `/listing/:id` | ListingDetail | Detailed listing view |
| `/faq` | FAQ | Frequently asked questions |
| `/contact` | Contact | Contact form |
| `/auth/register` | Register | User registration |
| `/auth/login` | Login | User login |

## Components

### Core Components

**Navbar** - Responsive navigation with auth state
- Desktop and mobile menus
- User dropdown when authenticated
- Dynamic login/logout buttons

**Footer** - Site footer with links and branding

**SEO** - Component for managing page metadata
```jsx
<SEO 
  title="BomaniHosts - Find Your Perfect Stay"
  description="Discover comfortable short and medium-term rentals across Kenya"
  keywords="rentals, Kenya, accommodation"
/>
```

**ContactForm** - Validated contact form
- Real-time validation
- Success/error messaging
- Rate-limited submissions

### Auth Components

**AuthContext** - Global authentication state
```jsx
const { user, login, register, logout, isAuthenticated } = useAuth();
```

## Styling

### Tailwind Configuration

Brand colors defined in `tailwind.config.js`:

```javascript
colors: {
  bomani: {
    bg: '#FEFBF3',      // Cream White
    primary: '#EF9587',  // Warm Coral
    peach: '#EEC3B4',    // Soft Peach
    accent: '#285D66',   // Deep Teal
  }
}
```

### Usage Examples

```jsx
<div className="bg-bomani-bg">
  <h1 className="text-bomani-accent">Welcome</h1>
  <button className="bg-bomani-primary text-white">
    Get Started
  </button>
</div>
```

## API Integration

### Configuration

API client configured in `src/api/config.js`:
- Automatic token injection
- Token refresh on 401
- Request/response interceptors
- Timeout handling

### Making API Calls

```javascript
import api from '../api/config';

// POST request
const response = await api.post('/contact/', data);

// GET with authentication
const user = await api.get('/auth/me/');
```

## Testing

Run tests:
```bash
npm run test
```

### Example Test

```javascript
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders contact form', () => {
  render(<ContactForm />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
});
```

## Deployment

### Vercel Deployment

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Set environment variables in Vercel dashboard:**
   - `VITE_API_BASE_URL` - Your backend API URL
   - `VITE_IMG_CDN` - Image CDN URL (Cloudinary/Cloudflare)

4. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify Deployment

1. **Create `netlify.toml`:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy via CLI or Git integration**

3. **Set environment variables in Netlify dashboard**

### Environment Variables for Production

```env
VITE_API_BASE_URL=https://api.bomanihosts.com/api
VITE_IMG_CDN=https://res.cloudinary.com/your-cloud/image/upload
```

## Performance Optimization

- Lazy load images with loading="lazy"
- Code splitting with React.lazy()
- Optimize images via CDN
- Minimize bundle size
- Enable gzip compression

## SEO Best Practices

- Unique page titles and meta descriptions
- Open Graph tags for social sharing
- JSON-LD structured data (FAQ page)
- Semantic HTML
- Alt text for images
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### CORS Errors

Ensure backend `CORS_ALLOWED_ORIGINS` includes your frontend URL.

### Token Refresh Issues

Check that refresh token is being stored and API base URL is correct.

### Build Errors

Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Create feature branch
2. Make changes
3. Run tests and linting
4. Submit pull request

## Support

For issues, contact support@bomanihosts.com