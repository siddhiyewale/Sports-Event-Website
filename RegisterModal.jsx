import React, { useState } from "react";
import axios from "axios";
import "./RegisterModal.css";

import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEvent, MdAccessTime } from "react-icons/md";

const RegisterModal = ({ event, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login to continue");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8080/getTransaction/${event.registrationFee}`
      );

      const data = res.data;

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: "Active Pulse",
        description: event.eventName,
        order_id: data.orderId,

        handler: async function (response) {
          // SAVE REGISTRATION
          await axios.post("http://localhost:8080/registration/save", {
            userId: user.id,
            eventId: event.id,
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            email: formData.email,
            phone: formData.phone,
            paymentId: response.razorpay_payment_id,
            amount: event.registrationFee,
          });

          // SEND EMAIL (WITH TIME)
          await axios.post("http://localhost:8080/registration/confirm", {
            name: formData.name,
            email: formData.email,
            eventName: event.eventName,
            city: event.city,
            state: event.state,
            eventDate: event.eventDate,
            startTime: event.startTime,
            endTime: event.endTime,
            amount: event.registrationFee,
          });

          alert("Registration successful 🎉");
          onClose();
        },

        theme: { color: "#00ffff" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="register-modal">
        <h2>{event.eventName}</h2>

        {/* 🔹 EVENT INFO CARD (ONLY ADDITION) */}
        <div className="event-meta-card">
          <p><MdLocationOn /> {event.city}, {event.state}</p>
          <p><MdEvent /> {event.eventDate}</p>
          <p><MdAccessTime /> {event.startTime} – {event.endTime}</p>
          <p className="fee">₹ {event.registrationFee}</p>
        </div>

        {/* 🔹 FORM (UNCHANGED) */}
        <form onSubmit={handlePayment} className="register-form">
          <div className="input-group">
            <FaUser />
            <input name="name" placeholder="Full Name" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaEnvelope />
            <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaPhoneAlt />
            <input name="phone" placeholder="Phone Number" required onChange={handleChange} />
          </div>

          <div className="row">
            <input name="age" type="number" placeholder="Age" required onChange={handleChange} />
            <select name="gender" required onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Pay ₹ {event.registrationFee}
          </button>

          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

