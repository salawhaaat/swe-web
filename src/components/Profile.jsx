import { useState } from "react";
import ProfileDropDown from "../components/ProfileDropDown";

const Profile = () => {
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
      {/* Conditional rendering of the dropdown */}
      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <ProfileDropDown />
        </div>
      )}
    </div>
  );
};

export default Profile;
