import { Link } from "react-router-dom";

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

export default ProfileDropDown;
