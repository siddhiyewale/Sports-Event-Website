import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:8080/wishlist/user/${user.id}`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, [user, navigate]);

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:8080/wishlist/delete/${id}`);
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <h2>❤️ My Wishlist</h2>

      {items.length === 0 ? (
        <p>No events in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {items.map(item => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.event.imageUrl} alt={item.event.eventName} />

              <h3>{item.event.eventName}</h3>
              <p>₹ {item.event.registrationFee}</p>

              <button
                className="book-btn"
                onClick={() => navigate(`/event/${item.event.id}`)}
              >
                Book Now
              </button>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
