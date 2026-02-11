
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role?.toLowerCase();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goToWishlist = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <header className="header">
      <div className="logo">🏃 ActivePulse</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>

        {!user && (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Register" className="signup-btn">Sign Up</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {role === "user" && (
          <>
            <button onClick={goToWishlist} className="wishlist-btn">
              💖 Wishlist
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;


























// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const [role, setRole] = useState(localStorage.getItem("role"));

//   const handleLogout = () => {
//     localStorage.clear();
//     setUser(null);
//     setRole(null);
//     navigate("/login");
//   };

//   const goToWishlist = () => {
//     if (!role) {
//       navigate("/login");
//     } else {
//       navigate("/wishlist");
//     }
//   };

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setUser(JSON.parse(localStorage.getItem("user")));
//       setRole(localStorage.getItem("role"));
//     };
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <header className="header">
//       <div className="logo">🏃 ActivePulse</div>

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/Register">Register</Link>
//         {/* <Link to="/wishlist">Wishlist</Link> */}

//         {!role && (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register" className="signup-btn">Sign Up</Link>
//           </>
//         )}

//         {role === "admin" && (
//           <>
//             <Link to="/admin">Admin Dashboard</Link>
//             <button onClick={handleLogout} className="logout-btn">Logout</button>
//           </>
//         )}

//         {role === "user" && (
//           <>
//             {/* <span>Hello, {user?.name || user?.email}</span> */}
//             <button onClick={goToWishlist} className="wishlist-btn">💖 Wishlist</button>
//             {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
//             <button onClick={handleLogout} className="logout-btn">Logout</button>

//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
