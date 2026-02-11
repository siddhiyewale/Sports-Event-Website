import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EventRegister.css";

const EventRegister = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ap/get/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    // ✅ validation
    if (!form.name || !form.age || !form.gender || !form.email || !form.phone) {
      alert("Please fill all details");
      return;
    }

    try {
      // 🔥 Razorpay order
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
          alert("Payment Successful 🎉");

          // ✅ SEND CONFIRMATION EMAIL
          await axios.post("http://localhost:8080/registration/confirm", {
            name: form.name,
            email: form.email,
            eventName: event.eventName,
            city: event.city,
            eventDate: event.eventDate,
            amount: event.registrationFee,
            paymentId: response.razorpay_payment_id
          });

          alert("Confirmation email sent 📩");


          await axios.post("http://localhost:8080/registration/save", {
  userId: JSON.parse(localStorage.getItem("user")).id,
  eventId: event.id,
  name: form.name,
  age: form.age,
  gender: form.gender,
  email: form.email,
  phone: form.phone,
  paymentId: response.razorpay_payment_id,
  amount: event.registrationFee
});

        },

        theme: {
          color: "#00ffff"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed to start");
    }
  };

  if (!event) return <p className="loading">Loading...</p>;

  return (
    <div className="event-register-page">
      <div className="register-card">
        <h1 className="event-name">{event.eventName}</h1>

        <p className="event-meta">
          📍 {event.city}, {event.state} | 📅 {event.eventDate}
        </p>

        <form className="register-form">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <button onClick={handlePayment}>
            Proceed to Payment ₹{event.registrationFee}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegister;
