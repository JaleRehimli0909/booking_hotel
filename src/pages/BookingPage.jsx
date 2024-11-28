import React from 'react';
import { useBooking } from '../Context/BookingContext';
import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {

    const { bookingDetails } = useBooking();
    const navigate = useNavigate();
    const handlePayment = () => {
        navigate('/hotels');
    };

    const handleGoBack = () => {
        navigate('/hotels');
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Reservation Summary</h1>
            <p className='mt-10 font-bold'>
                <strong className='p-2 border-2 border-transparent mr-2'
                    style={{
                        borderImage: 'linear-gradient(to right, blue, red) 1',
                    }}>
                    Check-In Date/
                </strong> {bookingDetails.checkInDate || "Not selected"}
            </p>
            <p className='mt-10 font-bold'>
                <strong className='p-2 border-2 border-transparent mr-2'
                    style={{
                        borderImage: 'linear-gradient(to right, blue, red) 1',
                    }}>
                    Check-Out Date/
                </strong> {bookingDetails.checkOutDate || "Not selected"}
            </p>
            <p className='mt-10 font-bold'>
                <strong className='p-2 mr-2'
                    style={{
                        border: '2px solid transparent',
                        borderImage: 'linear-gradient(to right, blue, red) 1',
                    }}>Total Days/</strong> {bookingDetails.totalDays}
            </p>
            <p className='mt-10 font-bold'>
                <strong className='p-2 border-2 border-transparent mr-2'
                    style={{
                        borderImage: 'linear-gradient(to right, blue, red) 1',
                    }}>Total Guests/</strong> {bookingDetails.guests}
            </p>
            <h4 className="text-lg font-semibold mt-10 border-2 border-transparent w-40 p-2"
                style={{
                    borderImage: 'linear-gradient(to right, blue, red) 1',
                }}>Selected Rooms/</h4>
            {bookingDetails.selectedRooms.length > 0 ? (
                <ul className="list-disc pl-6 font-bold"
                >
                    {bookingDetails.selectedRooms.map((room, index) => (
                        <li key={index}>
                            {room.type} - {room.count}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rooms selected.</p>
            )}
            <p className="mt-4 font-bold mt-10">
                <strong className='p-2 border-2 border-transparent mr-2' style={{
                    borderImage: 'linear-gradient(to right, blue, red) 1',
                }}>Total Amount/</strong> ${bookingDetails.totalAmount}
            </p>
            <p className="mt-10 font-bold">
                <strong
                    className="p-2 border-2 border-transparent mr-2 inline-block"
                    style={{
                        borderImage: 'linear-gradient(to right, blue, red) 1',
                        marginBottom: '0.25rem', 
                    }}
                >
                    Airport Transfers/
                </strong>
                <span className="break-words">{bookingDetails.selectedAirport || "Not selected"}</span>
            </p>



            {/* Buttons for Pay and Back */}
            <div className="flex justify-around mt-20">
                <button
                    onClick={handleGoBack}
                    className="bg-gray-500 text-white px-24 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-red-700"
                >
                    Back
                </button>
                <button
                    onClick={handlePayment}
                    className="bg-blue-500 text-white px-24 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-red-700"
                >
                    Pay
                </button>
            </div>
        </div>
    );
};

export default SummaryPage;
