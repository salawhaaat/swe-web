/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <Logo />
          {children}
        </div>
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <>
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 hover:text-gray-600"
        >
          VMS
        </Link>
      </div>
    </>
  );
};
export default Header;
