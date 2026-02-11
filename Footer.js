import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            <span className="dot"></span> Active Pulse
          </h2>
          <p>
            Discover, register, and participate in sports events across India.
            Stay active. Stay inspired.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Mumbai, Maharashtra</p>
          <p>Email: support@activepulse.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Active Pulse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
