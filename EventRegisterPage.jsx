import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventRegisterPage.css";

const EventRegisterPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ap/get/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!event) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <>
    <section
  className="event-hero"
  style={{ backgroundImage: `url(${event.imageUrl})` }}
>
  <div className="hero-overlay">
    <div className="container">
      <h1>{event.eventName}</h1>

      <div className="hero-meta">
        <span>📍 {event.city}</span>
        <span>📅 {event.eventDate}</span>
        <span>💰 ₹ {event.registrationFee}</span>
      </div>

      <button className="hero-cta" onClick={() => setShowModal(true)}>
        Register Now
      </button>
    </div>
  </div>
</section>


      <section className="why-join">
          <div className="container">

        <h2>Why You Should Join</h2>
        <div className="benefits">
          <div>🏅 Participation Certificate</div>
          <div>👟 Professionally Managed Event</div>
          <div>📸 Event Photography</div>
          <div>🤝 Community Experience</div>
        </div>
          </div>

      </section>

      <section className="event-details">
        <h2>Event Details</h2>
        <ul>
          <li>📍 Location: {event.city}</li>
          <li>📅 Date: {event.eventDate}</li>
          <li>🏃 Category: {event.category}</li>
          <li>👥 Max Participants: {event.maxParticipants}</li>
        </ul>
      </section>

      {/* URGENCY */}
      <section className="urgency-box">
        <h3>⏳ Registrations Closing Soon</h3>
        <p>Limited slots available. Don’t miss out!</p>
      </section>

      <section className="social-proof">
        <p>⭐ Rated 5.0 by previous participants</p>
        <p className="quote">
          “Amazing experience, well organised and fun!”
        </p>
      </section>

      {showModal && (
        <div className="modal-overlay">
          <div className="register-modal">
            <h2>Register for {event.eventName}</h2>

            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />

            <button className="submit-btn">
              Pay ₹ {event.registrationFee}
            </button>

            <span className="close" onClick={() => setShowModal(false)}>
              ✕
            </span>
          </div>
        </div>
      )}

      {/* STICKY REGISTER (MOBILE) */}
      <div className="sticky-register">
        <span>₹ {event.registrationFee}</span>
        <button onClick={() => setShowModal(true)}>Register</button>
      </div>
    </>
  );
};

export default EventRegisterPage;
