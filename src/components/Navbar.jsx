import { Link } from "react-router-dom";
export default function Navbar() {
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
          to="/vehicle-registration"
          className="text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Vehicle Registration
        </Link>
        {/* Additional navigation links here */}
      </nav>

      <div>
        <Link
          to="/login"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue-500"
        >
          Login
        </Link>
      </div>
    </>
  );
}
