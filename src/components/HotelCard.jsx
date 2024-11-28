import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  // Function to calculate stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; 

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <svg key={index} className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.293 2.785 1.016-5.937L1 6.958l5.957-.438L10 1l2.44 5.482 5.957.438-4.723 4.89 1.016 5.937z" />
          </svg>
        ))}
        {halfStar && (
          <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.293 2.785 1.016-5.937L1 6.958l5.957-.438L10 1l2.44 5.482 5.957.438-4.723 4.89 1.016 5.937z" fill="none" />
            <path d="M10 15l-5.293 2.785 1.016-5.937L1 6.958l5.957-.438L10 1l2.44 5.482 5.957.438-4.723 4.89 1.016 5.937z" />
          </svg>
        )}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
          <svg key={index + fullStars + (halfStar ? 1 : 0)} className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 15l-5.293 2.785 1.016-5.937L1 6.958l5.957-.438L10 1l2.44 5.482 5.957.438-4.723 4.89 1.016 5.937z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="hotel-card p-6 rounded-md shadow-md bg-white hover:shadow-xl">
      <img
        src={hotel.img}
        alt={hotel.name}
        className="w-full h-36 object-cover rounded-md"
        loading="lazy" 
      />
      <h2 className="text-xl font-semibold text-gray-800 mt-4">{hotel.name}</h2>
      <p className="text-gray-600 mt-2">
        <strong className="mr-2">Price:</strong> ${hotel.price}
      </p>
      <div className="mt-2">
        {renderStars(hotel.rating)}
      </div>
      <Link
        to={`/hotel/${hotel.id}`}
        className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-semibold"
      >
       / View Details /
      </Link>
    </div>
  );
};

export default HotelCard;
