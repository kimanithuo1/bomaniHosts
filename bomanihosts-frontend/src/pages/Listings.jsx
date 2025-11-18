import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ListingCard from '../components/ListingCard';

// Sample data - In production, fetch from API
const sampleListings = [
  {
    id: 1,
    title: 'Modern 2BR Apartment in Westlands',
    location: 'Westlands, Nairobi',
    price: 8500,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    featured: true,
    amenities: ['WiFi', 'Parking', 'Security', 'Gym'],
  },
  {
    id: 2,
    title: 'Cozy 1BR Studio in Kilimani',
    location: 'Kilimani, Nairobi',
    price: 5000,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Studio',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    featured: false,
    amenities: ['WiFi', 'Parking'],
  },
  {
    id: 3,
    title: 'Spacious 3BR House in Karen',
    location: 'Karen, Nairobi',
    price: 15000,
    bedrooms: 3,
    bathrooms: 3,
    type: 'House',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    featured: true,
    amenities: ['WiFi', 'Parking', 'Security', 'Garden', 'Pool'],
  },
  {
    id: 4,
    title: 'Beachfront Villa in Mombasa',
    location: 'Nyali, Mombasa',
    price: 20000,
    bedrooms: 4,
    bathrooms: 4,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    featured: true,
    amenities: ['WiFi', 'Parking', 'Security', 'Pool', 'Beach Access'],
  },
  {
    id: 5,
    title: 'Affordable 1BR in Ngong Road',
    location: 'Ngong Road, Nairobi',
    price: 4000,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    featured: false,
    amenities: ['WiFi', 'Security'],
  },
  {
    id: 6,
    title: 'Executive 2BR in Upperhill',
    location: 'Upperhill, Nairobi',
    price: 12000,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    featured: false,
    amenities: ['WiFi', 'Parking', 'Security', 'Gym', 'Pool'],
  },
];

const Listings = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredListings = sampleListings
    .filter((listing) => {
      if (filter === 'all') return true;
      return listing.type.toLowerCase() === filter;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return b.featured - a.featured;
      } else if (sortBy === 'price-low') {
        return a.price - b.price;
      } else if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <SEO 
        title="Browse Listings - BomaniHosts"
        description="Find your perfect rental property in Kenya. Browse our verified listings of apartments, houses, and villas."
        keywords="rentals Kenya, apartments Nairobi, houses Karen, Mombasa villas"
      />

      <div className="bg-bomani-bg min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-bomani-accent to-bomani-accent/90 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-lg text-bomani-bg/90">
              {filteredListings.length} properties available across Kenya
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-medium text-bomani-accent mb-2">
                  Property Type
                </label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-bomani-peach rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary"
                >
                  <option value="all">All Properties</option>
                  <option value="apartment">Apartments</option>
                  <option value="house">Houses</option>
                  <option value="villa">Villas</option>
                  <option value="studio">Studios</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-bomani-accent mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-bomani-peach rounded-lg focus:outline-none focus:ring-2 focus:ring-bomani-primary"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-bomani-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Listings;