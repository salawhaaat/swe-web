import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import UserCRUD from "./pages/UserCRUD";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/crud/user" element={<UserCRUD />} />
        <Route path="/crud/car-booking" element={<UserCRUD />} />
        <Route path="/crud/car" element={<UserCRUD />} />
        <Route path="/reports/fuel" element={<UserCRUD />} />
        <Route path="/reports/maintenance" element={<UserCRUD />} />
      </Routes>
    </BrowserRouter>
  );
}
