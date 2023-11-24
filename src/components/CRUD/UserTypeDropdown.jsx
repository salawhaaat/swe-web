/* eslint-disable react/prop-types */
const UserTypeDropdown = ({ userType, handleUserTypeChange }) => {
  return (
    <select
      className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
      value={userType}
      onChange={handleUserTypeChange}
    >
      <option value="">Select User Type</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
      <option value="guest">Guest</option>
    </select>
  );
};

export default UserTypeDropdown;
