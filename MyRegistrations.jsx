import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyRegistrations.css";

const MyRegistrations = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:8080/registration/user/${user.id}`)
      .then((res) => setRegistrations(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="myreg-page">
      <h2>🎟 My Event Registrations</h2>

      {registrations.length === 0 ? (
        <p className="empty-text">You have not registered for any events yet.</p>
      ) : (
        <div className="myreg-grid">
          {registrations.map((r) => (
            <div className="myreg-card" key={r.id}>
              <h3>{r.eventName || "Event"}</h3>

              <p><strong>Name:</strong> {r.name}</p>
              <p><strong>Email:</strong> {r.email}</p>
              <p><strong>Phone:</strong> {r.phone}</p>

              <p><strong>Amount Paid:</strong> ₹{r.amount}</p>
              <p className="pid">
                <strong>Payment ID:</strong> {r.paymentId}
              </p>

              <p className="date">
                Registered on: {r.registeredOn}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRegistrations;

