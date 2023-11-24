import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import CRUD from "../components/CRUD/CRUD";
import AdminPanel from "../components/admin/AdminPanel";

import Profile from "../components/common/Profile";
export default function UserCRUD() {
  return (
    <>
      <Header>
        <Navbar child={<Profile />} />
      </Header>
      <div className="flex">
        <AdminPanel />
        <div className="flex-grow">
          <CRUD />
        </div>
      </div>
      <Footer />
    </>
  );
}
