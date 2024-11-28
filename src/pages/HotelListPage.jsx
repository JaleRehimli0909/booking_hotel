import React from 'react';
import HotelCard from '../components/HotelCard';
import city_plaza from '../assets/img/city_plaza.jpg'

const HotelListPage = () => {
  const hotels = [
    { id: 1, name: 'Grand Luxury Hotel', price: 100, img: city_plaza, rating: 3.5 },
    { id: 2, name: 'Ocean View Resort', price: 150, img: city_plaza, rating: 4.5 },
    { id: 3, name: 'Mountain Retreat', price: 200, img: city_plaza, rating: 4.7 },
    { id: 4, name: 'City Plaza Hotel', price: 120, img: city_plaza, rating: 3.7 },
    { id: 5, name: 'Royal Palace Hotel', price: 250, img: city_plaza, rating: 4.7 },
    { id: 6, name: 'Skyline Resort', price: 180, img: city_plaza, rating: 4.2 },
    { id: 7, name: 'Beachfront Paradise', price: 220, img: city_plaza, rating: 4.2 },
    { id: 8, name: 'Luxury Hillside Inn', price: 175, img: city_plaza, rating: 4.2 },
  ];


  return (
    <div className="py-5">
      <h1 className="text-3xl font-semibold text-center">Hotel List</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="border p-3 hover:border-blue-500"
            style={{ borderTopRightRadius: "40px", borderBottomLeftRadius: "0px", borderBottomWidth: "0px", borderLeftWidth: "0px" }}
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListPage;
