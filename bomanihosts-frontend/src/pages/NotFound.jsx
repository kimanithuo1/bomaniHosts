import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found - BomaniHosts"
        description="The page you are looking for could not be found."
      />

      <div className="min-h-screen flex items-center justify-center bg-bomani-bg px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-bomani-primary">404</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-bomani-accent mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-bomani-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              Go Home
            </Link>
            <Link
              to="/listings"
              className="px-8 py-3 bg-white text-bomani-accent border-2 border-bomani-peach rounded-lg hover:bg-bomani-peach/20 transition-all font-semibold"
            >
              Browse Listings
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12">
            <p className="text-sm text-gray-600 mb-4">Or try one of these:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/faq" className="text-bomani-primary hover:underline">
                FAQ
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/contact" className="text-bomani-primary hover:underline">
                Contact Us
              </Link>
              <span className="text-gray-400">•</span>
              <Link to="/auth/login" className="text-bomani-primary hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;