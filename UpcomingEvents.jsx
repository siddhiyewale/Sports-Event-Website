import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingEvents.css";

const UpcomingEvents = ({ events }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [wishlistMap, setWishlistMap] = useState({});

  useEffect(() => {
    const savedWishlist = {};
    events.forEach((event) => {
      const saved = localStorage.getItem(`wishlist-${event.id}`);
      if (saved === "true") {
        savedWishlist[event.id] = true;
      }
    });
    setWishlistMap(savedWishlist);
  }, [events]);

  const toggleWishlist = (eventId) => {
    setWishlistMap((prev) => {
      const updated = {
        ...prev,
        [eventId]: !prev[eventId],
      };
      localStorage.setItem(`wishlist-${eventId}`, updated[eventId]);
      return updated;
    });
  };

  return (
    <section className="upcoming-section">
      <h2>Upcoming Events</h2>

      <div className="upcoming-grid">
        {events.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No events match your filters
          </p>
        ) : (
          events.map((event) => {
            const date = new Date(event.eventDate);
            const isWishlisted = wishlistMap[event.id];

            return (
              <div className="upcoming-card" key={event.id}>
                <div className="upcoming-img">
                  <img src={event.imageUrl} alt={event.eventName} />

                  <div className="img-overlay"></div>

                  <div className="date-badge">
                    {date.getDate()}
                    <span>
                      {date.toLocaleString("en-US", { month: "short" })}
                    </span>
                  </div>

                  <div
                    className={`heart-icon ${isWishlisted ? "active" : ""}`}
                    onClick={() => toggleWishlist(event.id)}
                  >
                    ♥
                  </div>

                  <div className="category-chip">
                    {event.category}
                  </div>
                </div>

                <div className="upcoming-body">
                  <h3>{event.eventName}</h3>

                  <div className="row">
                    <span className="tag">{event.category}</span>
                    <span className="rating">⭐ 5.0</span>
                  </div>

                  <p className="status">Registrations Open</p>

                  <div className="price-row">
                    <span className="price">
                      ₹ {event.registrationFee}
                    </span>
                    <span className="onwards">onwards</span>
                  </div>

                  <button
                    className="register-btn"
                    onClick={() =>
                      user
                        ? navigate(`/event/${event.id}`)
                        : navigate("/login")
                    }
                  >
                    Register
                  </button>
                </div>

                <div className="event-footer">
                  📍 {event.city}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
