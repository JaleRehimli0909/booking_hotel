import React from "react";
import { useBooking } from '../Context/BookingContext';

const AirportTransfers = () => {
  const { airportData} = useBooking();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Airport Transfers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      
      >
        {airportData.map((airport, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white hover:border-blue-500 hover:shadow-xl"
            style={{ borderTopRightRadius: "50px", borderBottomLeftRadius: "50px" }}
          >
            <h2 className="text-2xl font-semibold text-blue-600">
              {airport.name}
            </h2>
            <p className="text-gray-700 mt-2">
              <strong>Distance to Hotel:</strong> {airport.distance}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Transfer Car:</strong> {airport.car}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Additional Info:</strong> {airport.additionalInfo}
            </p>
          </div>

        ))}
      </div>
    </div>

  );
};

export default AirportTransfers;
