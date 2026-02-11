import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({
  event,
  isLoggedIn,
  isWishlisted,
  onToggleWishlist
}) => {
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    onToggleWishlist();
  };

  return (
    <div className="event-card">
      <div className="event-img">
        <img src={event.imageUrl} alt={event.eventName} />

        <div className="date-badge">
          {new Date(event.eventDate).getDate()}
          <span>
            {new Date(event.eventDate).toLocaleString("en-US", {
              month: "short",
            })}
          </span>
        </div>

        <div
          className={`heart-icon ${isWishlisted ? "active" : ""}`}
          onClick={handleWishlistClick}
        >
          ♥
        </div>

        <div className="category-chip">{event.category}</div>
      </div>

      <div className="event-body">
        <h3>{event.eventName}</h3>

        <div className="row">
          <span className="tag">{event.category}</span>
          <span className="rating">⭐ 5.0</span>
        </div>

        <p className="status">Registrations Open</p>

        <div className="price-row">
          <span className="price">₹ {event.registrationFee}</span>
          <span className="onwards">onwards</span>
        </div>

        <button
          className="register-btn"
          onClick={() =>
            isLoggedIn
              ? navigate(`/event/${event.id}`)
              : navigate("/login")
          }
        >
          Register
        </button>
      </div>

      <div className="event-footer">📍 {event.city}</div>
    </div>
  );
};

export default EventCard;
