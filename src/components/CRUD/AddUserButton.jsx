/* eslint-disable react/prop-types */
const AddUserButton = ({ handleAddUser }) => {
  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none"
      onClick={handleAddUser}
    >
      Add User
    </button>
  );
};

export default AddUserButton;
