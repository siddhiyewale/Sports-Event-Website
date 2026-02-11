import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventDetails.css";
import RegisterModal from "./RegisterModal";

import { FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ap/get/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!event) return <div className="event-loading">Loading event...</div>;

  const dateObj = new Date(event.eventDate);

  return (
    <div className="event-details-page">
      <section
        className="event-hero"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="event-hero-overlay">
          <h1>{event.eventName}</h1>

          <div className="hero-meta">
            <span>
              <FaMapMarkerAlt />
              {event.city}, {event.state}
            </span>

            <span>
              <FaCalendarAlt />
              {dateObj.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>

            <span>
              <FaRupeeSign />
              {event.registrationFee}
            </span>
          </div>

          <button className="hero-cta" onClick={() => setShowModal(true)}>
            Register Now
          </button>
        </div>
      </section>

      <section className="event-content">
        <div className="event-info">
          <h2>Why You Should Join</h2>

          <ul className="why-list">
            <li>
              <MdOutlineEventAvailable />
              Official participation certificate
            </li>
            <li>
              <HiUserGroup />
              Community & networking
            </li>
            <li>
              <BiTimeFive />
              Well-organized time slots
            </li>
          </ul>
        </div>

        <div className="event-organizer">
          <h2>Event Details</h2>

          <p>
            <FaCalendarAlt />
            <strong> Category:</strong> {event.category}
          </p>

          <p>
            <BiTimeFive />
            <strong> Start Time:</strong> {event.startTime}
          </p>

          <p>
            <BiTimeFive />
            <strong> End Time:</strong> {event.endTime}
          </p>

          <p>
            <HiUserGroup />
            <strong> Max Participants:</strong> {event.maxParticipants}
          </p>

          <button className="register-btn" onClick={() => setShowModal(true)}>
            Secure Your Spot
          </button>
        </div>
      </section>

      {showModal && (
        <RegisterModal event={event} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default EventDetails;
