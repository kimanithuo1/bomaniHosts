import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-bomani-bg border-b border-bomani-peach/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-bomani-accent">
                Bomani<span className="text-bomani-primary">Hosts</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/listings"
              className="text-bomani-accent hover:text-bomani-primary transition-colors"
            >
              Listings
            </Link>
            <Link
              to="/faq"
              className="text-bomani-accent hover:text-bomani-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-bomani-accent hover:text-bomani-primary transition-colors"
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-bomani-accent">
                  Hello, {user?.username}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-bomani-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/auth/login"
                  className="text-bomani-accent hover:text-bomani-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-bomani-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bomani-accent p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/listings"
                className="text-bomani-accent hover:text-bomani-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                Listings
              </Link>
              <Link
                to="/faq"
                className="text-bomani-accent hover:text-bomani-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-bomani-accent hover:text-bomani-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-bomani-accent py-2">
                    Hello, {user?.username}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-left text-bomani-primary py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    className="text-bomani-accent hover:text-bomani-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="text-bomani-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;