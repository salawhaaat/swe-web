import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg">Contact Info</span>
            <span>Email: contact@example.com</span>
            <span>Phone: +123 456 7890</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-lg">About Us</span>
            <Link to="/about" className="hover:text-gray-300">
              Lorem ipsum
            </Link>
          </div>

          {/* Additional sections as needed */}
          <div className="flex flex-col">
            <span className="font-bold text-lg">Resources</span>
            <Link to="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
            <Link to="/support" className="hover:text-gray-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
