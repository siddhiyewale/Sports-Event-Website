
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import EventCard from "../components/EventCard";
// import "./CategoryPage.css";

// const CategoryPage = () => {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [wishlistMap, setWishlistMap] = useState({});

//   const user = JSON.parse(localStorage.getItem("user"));
//   const isLoggedIn = !!user;

//   // load events
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:8080/ap/category/${type}`)
//       .then((res) => {
//         setEvents(res.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [type]);

//   // load wishlist from backend
//   useEffect(() => {
//     if (!user) return;

//     axios
//       .get(`http://localhost:8080/wishlist/user/${user.id}`)
//       .then((res) => {
//         const map = {};
//         res.data.forEach((item) => {
//           map[item.event.id] = true;
//         });
//         setWishlistMap(map);
//       })
//       .catch(() => {});
//   }, [user]);

//  const toggleWishlist = async (eventId) => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user) {
//     alert("Please login to use wishlist");
//     return;
//   }

//   try {
//     await axios.post("http://localhost:8080/wishlist/add", null, {
//       params: {
//         userid: user.id,
//         eventid: eventId,
//       },
//     });

//     setWishlistMap((prev) => ({
//       ...prev,
//       [eventId]: true,
//     }));

//   } catch (err) {
//     alert("Already in wishlist");
//     setWishlistMap((prev) => ({
//       ...prev,
//       [eventId]: true,
//     }));
//   }
// };


//   return (
//     <div className="category-page">
//       <section className="category-hero">
//         <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Events</h1>
//         <p>
//           Explore upcoming {type} events across India and register to be part
//           of the action.
//         </p>
//       </section>

//       <section className="category-content">
//         {loading ? (
//           <p className="loading-text">Loading events...</p>
//         ) : events.length === 0 ? (
//           <p className="empty-text">No events available.</p>
//         ) : (
//           <div className="event-grid">
//             {events.map((event) => (
//               <EventCard
//                 key={event.id}
//                 event={event}
//                 isLoggedIn={isLoggedIn}
//                 isWishlisted={wishlistMap[event.id]}
//                 onToggleWishlist={() => toggleWishlist(event.id)}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CategoryPage;




import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EventCard from "../components/EventCard";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlistMap, setWishlistMap] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  // 🔹 Load events
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/ap/category/${type}`)
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [type]);

  // 🔹 Load wishlist from backend
  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:8080/wishlist/user/${user.id}`)
      .then((res) => {
        const map = {};
        res.data.forEach((item) => {
          map[item.event.id] = true;
        });
        setWishlistMap(map);
      })
      .catch(() => {});
  }, [user]);

  // ❤️ Add to wishlist
  const toggleWishlist = async (eventId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    // already wishlisted → do nothing
    if (wishlistMap[eventId]) return;

    try {
      await axios.post("http://localhost:8080/wishlist/add", null, {
        params: {
          userid: user.id,
          eventid: eventId,
        },
      });

      setWishlistMap((prev) => ({
        ...prev,
        [eventId]: true,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="category-page">
      <section className="category-hero">
        <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Events</h1>
        <p>
          Explore upcoming {type} events across India and register to be part
          of the action.
        </p>
      </section>

      <section className="category-content">
        {loading ? (
          <p className="loading-text">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="empty-text">No events available.</p>
        ) : (
          <div className="event-grid">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isLoggedIn={isLoggedIn}
                isWishlisted={wishlistMap[event.id]}
                onToggleWishlist={() => toggleWishlist(event.id)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
