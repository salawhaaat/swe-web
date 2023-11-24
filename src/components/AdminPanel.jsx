import SideNavbar from "../components/SideNavbar";
import { Outlet } from "react-router-dom"; // If you're using React Router v6

const AdminPanel = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex-grow">
        {/* Your main admin content will be rendered here */}
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
    </div>
  );
};

export default AdminPanel;
