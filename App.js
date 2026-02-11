import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CategoryPage from "./pages/CategoryPage";
import EventDetails from "./pages/EventDetails";
// import EventRegister from "./pages/EventRegister";
import Wishlist from "./pages/Wishlist";
import MyRegistrations from "./pages/MyRegistrations";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/PageBackground.css";


function App() {
  return (
    <div className="app-background">
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />

        <Route path="/category/:type" element={<CategoryPage />} />

        <Route path="/event/:id" element={<EventDetails />} />
        {/* <Route path="/event/:id" element={<EventRegisterPage />} /> */}

        {/* <Route path="/event/:id/register" element={<EventRegister />} /> */}
        <Route path="/my-registrations" element={<MyRegistrations />} />


        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </Router>
   </div>
  );
}

export default App;
