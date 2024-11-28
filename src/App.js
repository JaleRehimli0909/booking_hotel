import React from "react";
import "../src/index.css"; // Tailwind CSS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelListPage from "./pages/HotelListPage";
import HotelDetailPage from "./pages/HotelDetailPage";
import BookingPage from "./pages/BookingPage";
import AirportTransfers from "./pages/AirportTransfers";
import SpecialOffers from "./pages/SpecialOffers";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelListPage />} />
            <Route path="/airport-transfers" element={<AirportTransfers />} />
            <Route path="/services" element={<SpecialOffers />} />
            <Route path="/hotel/:id" element={<HotelDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
