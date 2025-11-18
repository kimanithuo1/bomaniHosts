import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {listing.featured && (
          <div className="absolute top-4 left-4 bg-bomani-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-bomani-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          {listing.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-bomani-accent mb-2 line-clamp-2">
          {listing.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{listing.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm">{listing.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{listing.bathrooms} Bath</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {listing.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="text-xs bg-bomani-peach/30 text-bomani-accent px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {listing.amenities.length > 3 && (
            <span className="text-xs bg-bomani-peach/30 text-bomani-accent px-2 py-1 rounded">
              +{listing.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-bomani-peach/30">
          <div>
            <span className="text-2xl font-bold text-bomani-primary">
              KSh {listing.price.toLocaleString()}
            </span>
            <span className="text-gray-600 text-sm"> / month</span>
          </div>
          <span className="text-bomani-primary font-semibold hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;