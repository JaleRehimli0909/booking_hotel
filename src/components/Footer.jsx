import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="max-w-screen-xl mx-auto text-center">
        <p>&copy; 2024 HalalHolidayCheck. All rights reserved.</p>
        <div className="mt-4">
          <a href="/terms" className="text-gray-400 hover:text-white px-4">Terms & Conditions</a>
          <a href="/privacy" className="text-gray-400 hover:text-white px-4">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
