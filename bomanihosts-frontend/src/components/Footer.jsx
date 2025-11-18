import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bomani-accent text-bomani-bg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bomani<span className="text-bomani-primary">Hosts</span>
            </h3>
            <p className="text-bomani-bg/80">
              Your trusted platform for short and medium-term rentals across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/listings"
                  className="text-bomani-bg/80 hover:text-bomani-primary transition-colors"
                >
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-bomani-bg/80 hover:text-bomani-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-bomani-bg/80 hover:text-bomani-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-bomani-bg/80">
              <li>Email: support@bomanihosts.com</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bomani-bg/20 mt-8 pt-8 text-center text-bomani-bg/70">
          <p>&copy; {currentYear} BomaniHosts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;