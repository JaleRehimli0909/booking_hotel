import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import city_plaza_room from '../assets/img/city_plaza_room.jpg';
import city_plaza_room2 from '../assets/img/city_plaza_room2.jpg';
import city_plaza_room3 from '../assets/img/city_plaza_room3.jpg';
import city_plaza_kitchen from '../assets/img/city_plaza_kitchen.jpg';
import city_plaza_bathroom from '../assets/img/city_plaza_bathroom.jpg';
import { useBooking } from '../Context/BookingContext';

const HotelDetailPage = () => {
  const hotel = {
    name: "Luxury Hotel",
    description: "A luxurious stay with premium services, located in the heart of the city.",
    location: "New York, USA",
    pricePerNight: 250,
    images: [
      city_plaza_room,
      city_plaza_room2,
      city_plaza_room3,
      city_plaza_kitchen,
      city_plaza_bathroom,
    ],
    rooms: [
      { type: "Single Room", price: 150 },
      { type: "Double Room", price: 250 },
      { type: "Suite", price: 400 }
    ]
  };


  const [selectedImage, setSelectedImage] = useState(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectAirport, setSelectAirport] = useState("");
  const { setBookingDetails, airportData, selectedAirport } = useBooking();

  const navigate = useNavigate();
  const handleGuestsChange = (e) => setGuests(e.target.value);


  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate || selectedRoomsDetails().length === 0) {
      alert("Please select check-in date, check-out date, and at least one room.");
      return;
    }
    setBookingDetails({
      checkInDate,
      checkOutDate,
      totalDays: calculateDays(),
      selectedRooms: selectedRoomsDetails(),
      totalAmount: calculateTotal() * calculateDays(),
      guests: guests,
      selectedAirport: selectAirport
    });
    navigate('/booking');
  }

  const handleAirportChange = (e) => {
    setSelectAirport(e.target.value);
  };


  // select date
  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    if (new Date(e.target.value) > new Date(checkOutDate)) {
      setCheckOutDate("");
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const calculateDays = () => {
    if (!checkInDate || !checkOutDate) return 0;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    const differenceInTime = checkOut - checkIn;
    const days = differenceInTime / (1000 * 60 * 60 * 24);

    return days > 0 ? days : 0;
  };



  const [roomCounts, setRoomCounts] = useState(
    hotel.rooms.map(() => 0)
  );
  const handleRoomCountChange = (index, value) => {
    const updatedCounts = [...roomCounts];
    updatedCounts[index] = Math.max(0, value);
    setRoomCounts(updatedCounts);
  };

  const calculateTotal = () => {
    return hotel.rooms.reduce(
      (total, room, index) => total + room.price * roomCounts[index],
      0
    );
  };

  const selectedRoomsDetails = () => {
    return hotel.rooms
      .map((room, index) => ({
        type: room.type,
        count: roomCounts[index],
      }))
      .filter((room) => room.count > 0);
  };


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };



  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{hotel.name}</h1>

      <div className="overflow-x-auto mb-8">
        <div className="flex justify-center items-center space-x-4">
          {hotel.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hotel image ${index + 1}`}
              className="w-64 h-64 object-cover rounded-lg"
              onClick={() => handleImageClick(image)}
              loading="lazy" 
            />
          ))}
        </div>



        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleCloseModal}
          >
            <img
              src={selectedImage}
              alt="Selected Hotel"
              className="max-w-3xl max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
              loading="lazy" 
            />
          </div>
        )}
      </div>

      {/* Hotel description and location */}
      <div className="text-center mb-6">
        <p className="text-lg">{hotel.description}</p>
        <p className="text-sm text-gray-500">{hotel.location}</p>
      </div>
      {/* Room List */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
        <div className="space-y-4 ">
          {hotel.rooms.map((room, index) => (
            <div key={index} className="border p-4 rounded-lg flex justify-between items-center"
              style={{
                border: '2px solid transparent',
                borderImage: 'linear-gradient(to right, blue, red) 1',
              }}
            >
              <div>
                <h3 className="text-xl">{room.type}</h3>
                <p className="text-sm text-gray-500">Price per night</p>
              </div>
              <div className="flex items-center">
                <p className="text-xl font-semibold mr-4">${room.price}</p>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-2">
                  <label htmlFor={`room-count-${index}`} className="text-sm"></label>
                  <input
                    id={`room-count-${index}`}
                    type="number"
                    min="0"
                    max="10"
                    defaultValue={0}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 ml-4"
                    onChange={(e) =>
                      handleRoomCountChange(index, Number(e.target.value))
                    }
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Rooms */}
      <div>
        <h3 className="text-xl font-bold mt-4">Selected Rooms:</h3>
        {selectedRoomsDetails().length > 0 ? (
          <ul className="list-disc pl-6">
            {selectedRoomsDetails().map((room, index) => (
              <li key={index} className="text-lg">
                <b>{room.type} - {room.count}</b>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No rooms selected.</p>
        )}
      </div>

      {/* Toplam Fiyat */}
      <div className="mt-4 text-xl font-bold">
        Total Amount: ${calculateTotal()}
      </div>
      {/* Sifariş formu */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="check-in" className="block text-sm font-medium">
              Check-In Date
            </label>
            <input
              type="date"
              id="check-in"
              className="w-full px-4 py-2 border rounded-lg"
              value={checkInDate}
              onChange={handleCheckInChange}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div>
            <label htmlFor="check-out" className="block text-sm font-medium">
              Check-Out Date
            </label>
            <input
              type="date"
              id="check-out"
              className="w-full px-4 py-2 border rounded-lg"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              min={checkInDate}
              disabled={!checkInDate}
            />
          </div>

          {/* Total Day */}
          <div className="w-full mt-4 text-xl font-bold text-left">
            Total Days: {calculateDays()}
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              className="w-full px-4 py-2 border rounded-lg"
              value={guests}
              onChange={handleGuestsChange}
              min="1"
              max="10"
              disabled={false}
            />
          </div>
          {/* Select Dropdown for Airport */}
          <div className="mt-4">
            <label htmlFor="airport" className="block text-sm font-medium">
              Select Airport Transfers
            </label>
            <select
              id="airport"
              className="w-full px-4 py-2 border rounded-lg"
              value={selectedAirport}
              onChange={handleAirportChange}
            >
              <option value="">Select an airport</option>
              {airportData.map((airport, index) => (
                <option key={index} value={airport.name}>
                  {airport.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 w-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-700"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </form>
      </div>

    </div >
  );
};

export default HotelDetailPage;
