/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar({ child }) {
  const [isLoggedIn] = useState(true);
  return (
    <>
      <nav className="md:flex space-x-10">
        <Link
          to="/"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/Auction"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Auction
        </Link>
        <Link
          to="/booking"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Booking
        </Link>
        <Link
          to="/aboutus"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          About Us
        </Link>
      </nav>
      {isLoggedIn ? (
        child
      ) : (
        <Link
          to="/login"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Login
        </Link>
      )}
    </>
  );
}
