import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import VehicleCarousel from "../components/VehicleCarousel";
import AdminPanel from "../components/AdminPanel";
export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <div className="flex">
        <AdminPanel />
        <div className="flex-grow">
          <VehicleCarousel />
          <Dashboard />
        </div>
      </div>
      <Footer />
    </>
  );
}
