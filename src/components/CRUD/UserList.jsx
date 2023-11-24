/* eslint-disable react/prop-types */
const UserList = ({ users, handleEdit, handleDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center p-2 border-b-2"
        >
          <span>{user.name}</span>
          <div>
            <button
              className="text-blue-600 hover:text-blue-800 px-2"
              onClick={() => handleEdit(user.id)}
            >
              Edit
            </button>
            <button
              className="text-red-600 hover:text-red-800 px-2"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
