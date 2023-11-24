/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
