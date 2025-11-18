import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Sample data - In production, fetch from API based on ID
const sampleListings = [
  {
    id: 1,
    title: 'Modern 2BR Apartment in Westlands',
    location: 'Westlands, Nairobi',
    price: 8500,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
    ],
    description: 'Beautiful modern apartment in the heart of Westlands. Perfect for professionals and small families. Close to shopping malls, restaurants, and public transport. The apartment features modern finishes, ample natural light, and a great view of the city.',
    amenities: ['WiFi', 'Parking', '24/7 Security', 'Gym', 'Backup Generator', 'Water Supply'],
    hostName: 'John Kamau',
    hostPhone: '+254712345678',
    available: true,
  },
  {
    id: 2,
    title: 'Cozy 1BR Studio in Kilimani',
    location: 'Kilimani, Nairobi',
    price: 5000,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Studio',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    description: 'Cozy studio apartment perfect for singles or couples. Located in the vibrant Kilimani area with easy access to amenities.',
    amenities: ['WiFi', 'Parking'],
    hostName: 'Mary Njeri',
    hostPhone: '+254723456789',
    available: true,
  },
  {
    id: 3,
    title: 'Spacious 3BR House in Karen',
    location: 'Karen, Nairobi',
    price: 15000,
    bedrooms: 3,
    bathrooms: 3,
    type: 'House',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
    ],
    description: 'Luxurious 3-bedroom house in the prestigious Karen area. Features a large garden, modern kitchen, and spacious living areas.',
    amenities: ['WiFi', 'Parking', 'Security', 'Garden', 'Pool'],
    hostName: 'David Ochieng',
    hostPhone: '+254734567890',
    available: true,
  },
];

const ListingDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find listing by ID
  const listing = sampleListings.find((l) => l.id === parseInt(id));

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-bomani-accent mb-4">Listing not found</h2>
          <Link to="/listings" className="text-bomani-primary hover:underline">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${listing.title} listed on BomaniHosts.`
    );
    window.open(`https://wa.me/${listing.hostPhone.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEO 
        title={`${listing.title} - BomaniHosts`}
        description={listing.description}
        ogImage={listing.images[0]}
      />

      <div className="bg-bomani-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link to="/" className="text-bomani-primary hover:underline">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/listings" className="text-bomani-primary hover:underline">Listings</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{listing.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="relative h-96">
                  <img
                    src={listing.images[currentImageIndex]}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {listing.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === 0 ? listing.images.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <svg className="w-6 h-6 text-bomani-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === listing.images.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      >
                        <svg className="w-6 h-6 text-bomani-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {listing.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {listing.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                          currentImageIndex === index
                            ? 'border-bomani-primary'
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${listing.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-bomani-accent mb-2">
                      {listing.title}
                    </h1>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{listing.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-bomani-primary">
                      KSh {listing.price.toLocaleString()}
                    </div>
                    <div className="text-gray-600">per month</div>
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-bomani-peach/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bomani-accent">{listing.bedrooms}</div>
                    <div className="text-gray-600 text-sm">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bomani-accent">{listing.bathrooms}</div>
                    <div className="text-gray-600 text-sm">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bomani-accent">{listing.type}</div>
                    <div className="text-gray-600 text-sm">Property Type</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-bomani-accent mb-3">Description</h2>
                  <p className="text-gray-700 leading-relaxed">{listing.description}</p>
                </div>

                {/* Amenities */}
                <div className="mt-6">
                  <h2 className="text-xl font-bold text-bomani-accent mb-3">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {listing.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-bomani-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-bomani-accent mb-4">Contact Host</h3>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-bomani-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {listing.hostName.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-bomani-accent">{listing.hostName}</div>
                      <div className="text-sm text-gray-600">Property Host</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-[#25D366] text-white py-3 px-6 rounded-lg hover:bg-[#20BA5A] transition-all font-semibold flex items-center justify-center mb-3"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Host
                </button>

                <Link
                  to="/contact"
                  className="w-full bg-bomani-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold block text-center"
                >
                  Send Inquiry
                </Link>

                <div className="mt-6 p-4 bg-bomani-peach/20 rounded-lg">
                  <div className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-bomani-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetail;