import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: "",
    checkOutDate: "",
    selectedRooms: [],
    totalDays: 0,
    totalAmount: 0,
    guest:0,
    selectedAirport:""
  });

  const airportData = [
    {
      name: "Heydar Aliyev International Airport (GYD)",
      distance: "45 minutes",
      car: "Mercedes-Benz V-Class",
      additionalInfo: "Wi-Fi, air conditioning, comfortable seats",
    },
    {
      name: "Tbilisi International Airport (TBS)",
      distance: "1 hour 30 minutes",
      car: "Toyota Camry",
      additionalInfo: "Economy class, air conditioning",
    },
    {
      name: "Istanbul New Airport (IST)",
      distance: "2 hours",
      car: "Audi A6",
      additionalInfo: "Luxury class, water, and snacks",
    },
    {
      name: "London Heathrow Airport (LHR)",
      distance: "35 minutes",
      car: "Tesla Model S",
      additionalInfo: "Electric car, Wi-Fi, and charging ports",
    },
    {
      name: "Gatwick Airport (LGW)",
      distance: "50 minutes",
      car: "BMW 5 Series",
      additionalInfo: "Premium class, spacious legroom",
    },
    {
      name: "Manchester Airport (MAN)",
      distance: "1 hour 15 minutes",
      car: "Volkswagen Passat",
      additionalInfo: "Comfortable seats, USB charging",
    },
    {
      name: "Birmingham Airport (BHX)",
      distance: "1 hour",
      car: "Mercedes-Benz E-Class",
      additionalInfo: "Business class, air conditioning",
    },
  ];
  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails,airportData}}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
