import { useState } from "react";
import SearchBar from "../CRUD/SearchBar";
import UserTypeDropdown from "../CRUD/UserTypeDropdown";
import AddUserButton from "../CRUD/AddUserButton";
import UserList from "../CRUD/UserList";

const CRUDComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", type: "Admin" },
    { id: 2, name: "Jane Doe", type: "User" },
    { id: 3, name: "John Smith", type: "User" },
    { id: 4, name: "Jane Smith", type: "Admin" },
  ]); // This should be fetched from a database or API

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleAddUser = () => {
    // This would typically open a modal or form to input new user details
    console.log("Add user logic here");
  };

  const handleEdit = (userId) => {
    // This would typically set some editing state or open a modal with the user's details
    console.log("Edit logic for user:", userId);
  };

  const handleDelete = (userId) => {
    // This would remove the user from the database and update the state
    console.log("Delete logic for user:", userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <UserTypeDropdown
          userType={userType}
          handleUserTypeChange={handleUserTypeChange}
        />
        <AddUserButton handleAddUser={handleAddUser} />
      </div>
      <UserList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CRUDComponent;
