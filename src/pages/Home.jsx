import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Dashboard from "../components/dashboard/Dashboard";
import VehicleCarousel from "../components/dashboard/VehicleCarousel";
// import AdminPanel from "../components/admin/AdminPanel";
import Profile from "../components/common/Profile";
export default function Home() {
  return (
    <>
      <Header>
        <Navbar child={<Profile />} />
      </Header>
      <div className="flex">
        {/* <AdminPanel /> */}
        <div className="flex-grow">
          <VehicleCarousel />
          <Dashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}
