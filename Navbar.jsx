import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [wishlistCount, setWishlistCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const isAdmin = user?.role?.toLowerCase() === "admin";

  useEffect(() => {
document.body.classList.remove("light", "dark");
document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* ===== WISHLIST COUNT ===== */
  useEffect(() => {
    if (user && !isAdmin) {
      axios
        .get(`http://localhost:8080/wishlist/user/${user.id}`)
        .then((res) => setWishlistCount(res.data.length))
        .catch(() => {});
    }
  }, [user, isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo-dot">🟡</span>
        <span className="logo-text">Active Pulse</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* RIGHT */}
      <div className={`nav-right ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {!user ? (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </>
        ) : isAdmin ? (
          <>
            <Link
              to="/admin"
              className="admin-link"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>

            {/* 🌙☀️ TOGGLE (ADMIN) */}
            <span className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </>
        ) : (
          <>
            <div className="user-pill">
              <span
                className="wishlist-icon"
                onClick={() => {
                  navigate("/wishlist");
                  setMenuOpen(false);
                }}
              >
                ❤️ Fav
                {wishlistCount > 0 && (
                  <span className="wishlist-count">{wishlistCount}</span>
                )}
              </span>

              <span
                className="nav-user clickable"
                onClick={() => {
                  navigate("/user");
                  setMenuOpen(false);
                }}
              >
                Hi, {user?.name}
              </span>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>

            {/* 🌙☀️ TOGGLE (USER) */}
            <span className="theme-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
