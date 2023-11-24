/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative flex items-center px-2 py-2 rounded-md">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4228/4228171.png"
        alt="Salauat Bruh"
        className="h-10 w-10 rounded-full"
      />
      <div className="ml-2">
        <div className="font-medium text-gray-700">Salauat Bruh</div>
        <div className="text-sm text-gray-500">
          Class: User
          <button onClick={toggleDropdown} className="text-red-600 ml-1">
            {dropdownOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <ProfileDropDown />
        </div>
      )}
    </div>
  );
}

const ProfileDropDown = () => {
  return (
    <div className="relative mt-10 rounded-md">
      <div className="absolute text-right right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-30">
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Profile
        </Link>
        <Link
          to="/booking-history"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Booking History
        </Link>
        <Link
          to="/contact-us"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
        >
          Contact Us
        </Link>
        ---------------------
        <button className="text-center w-full block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};
