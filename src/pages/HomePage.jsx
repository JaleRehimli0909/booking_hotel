import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../assets/img/home.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/hotels');
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-80 p-10 rounded-lg">
      {/* Text Section */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Hotel Booking System
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          The highest quality, premium service hotels
        </p>
      </div>

      {/* Image Section */}
      <div
        className="mt-6 md:mt-0 md:w-1/2 flex justify-center cursor-pointer"
        onClick={handleImageClick}
      >
        <img
          src={home}
          alt="Home"
          className="w-full max-w-md md:max-w-full md:h-auto rounded-lg object-cover"
          loading="lazy" 
        />
      </div>
    </div>
  );
};

export default HomePage;

