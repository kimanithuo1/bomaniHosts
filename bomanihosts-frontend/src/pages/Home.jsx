import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="BomaniHosts - Find Your Perfect Stay in Kenya"
        description="Discover comfortable short and medium-term rentals across Kenya. Book your ideal accommodation with BomaniHosts."
        keywords="rentals Kenya, accommodation, short term rental, vacation homes, apartments Kenya"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bomani-accent to-bomani-accent/90 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-bomani-bg/90 max-w-3xl mx-auto">
              Discover comfortable, verified rentals for your short or medium-term stay across Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/listings"
                className="px-8 py-4 bg-bomani-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
              >
                Browse Listings
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-bomani-accent rounded-lg hover:bg-bomani-bg transition-all font-semibold text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-bomani-accent text-center mb-12">
            Why Choose BomaniHosts?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bomani-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bomani-accent mb-4">Verified Listings</h3>
              <p className="text-gray-600">
                All properties are thoroughly verified to ensure quality and safety for our guests.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bomani-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bomani-accent mb-4">Best Prices</h3>
              <p className="text-gray-600">
                Competitive rates with transparent pricing. No hidden fees, just honest value.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bomani-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-bomani-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bomani-accent mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is always available to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-bomani-peach py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bomani-accent mb-6">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="text-xl text-bomani-accent/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied guests who have found their ideal accommodation through BomaniHosts.
          </p>
          <Link
            to="/listings"
            className="inline-block px-8 py-4 bg-bomani-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg"
          >
            Explore Listings
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;