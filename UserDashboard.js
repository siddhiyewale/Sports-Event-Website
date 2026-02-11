import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import MyRegistrations from "./MyRegistrations";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [activeTab, setActiveTab] = useState("registered");

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="user-dashboard">
      {/* HEADER */}
      <div className="user-header">
        <h1>
          Welcome, <span className="gold-text">{user?.name}</span> 👋
        </h1>
        <p>Manage your events and profile</p>
      </div>

      {/* ACTIONS */}
      <div className="user-actions">
        <button onClick={() => navigate("/")}>Browse Events</button>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* TABS */}
      <div className="user-tabs">
        <button
          className={activeTab === "registered" ? "active" : ""}
          onClick={() => setActiveTab("registered")}
        >
          My Registered Events
        </button>

        <button onClick={() => navigate("/wishlist")}>
          Wishlisted Events
        </button>

        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </button>
      </div>

      {/* CONTENT */}
      <div className="user-section">
        {activeTab === "registered" && <MyRegistrations />}

        {activeTab === "profile" && (
          <>
            <h2 className="section-title">My Profile</h2>

            <div className="profile-card">
              {user &&
                Object.entries(user).map(
                  ([key, value]) =>
                    ![
                      "id",
                      "password",
                      "createdAt",
                      "updatedAt",
                    ].includes(key) && (
                      <div className="profile-row" key={key}>
                        <span>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>

                        <span
                          className={
                            key === "role"
                              ? "orange-text"
                              : "gold-text"
                          }
                        >
                          {value}
                        </span>
                      </div>
                    )
                )}
            </div>

            <button
              className="edit-btn"
              onClick={() => navigate("/edit-profile")}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
