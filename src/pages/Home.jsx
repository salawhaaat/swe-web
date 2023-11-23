import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <Navbar />
      </Header>
      <Dashboard />
      <Footer />
    </div>
  );
}
