import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [selected, setSelected] = useState("viewevents");
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const [eventForm, setEventForm] = useState({
    eventName: "",
    city: "",
    state: "",
    category: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    registrationFee: "",
    maxParticipants: "",
    organizerName: "",
    organizerEmail: "",
    organizerContact: "",
    imageUrl: "",
    isRegistrationOpen: true,
    isCertificateEnabled: false,
  });

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    if (selected === "viewevents") {
      axios
        .get("http://localhost:8080/ap/getall")
        .then((res) => setEvents(res.data))
        .catch((err) => console.error(err));
    }

    if (selected === "viewusers") {
      axios
        .get("http://localhost:8080/user/getall")
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err));
    }
  }, [selected]);

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventForm({
      ...eventForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();

    const payload = {
      ...eventForm,
      registrationFee: Number(eventForm.registrationFee),
      maxParticipants: Number(eventForm.maxParticipants),
      organizerContact: Number(eventForm.organizerContact),
    };

    try {
      await axios.post("http://localhost:8080/ap/add", payload);
      alert("✅ Event added successfully!");
      setSelected("viewevents");
    } catch (err) {
      console.error(err.response?.data);
      alert("❌ Error adding event");
    }
  };

  const handleEditClick = (event) => {
    setEditEvent(event);
    setEventForm({
      eventName: event.eventName || "",
      city: event.city || "",
      state: event.state || "",
      category: event.category || "",
      eventDate: event.eventDate || "",
      startTime: event.startTime || "",
      endTime: event.endTime || "",
      registrationFee: event.registrationFee || "",
      maxParticipants: event.maxParticipants || "",
      organizerName: event.organizerName || "",
      organizerEmail: event.organizerEmail || "",
      organizerContact: event.organizerContact || "",
      imageUrl: event.imageUrl || "",
      isRegistrationOpen: event.isRegistrationOpen ?? true,
      isCertificateEnabled: event.isCertificateEnabled ?? false,
    });
    setIsEditing(true);
  };

  /* 🔥🔥🔥 ONLY FIX IS HERE 🔥🔥🔥 */
  const handleUpdateEvent = async (e) => {
    e.preventDefault();

    const payload = {
      id: editEvent.id,
      ...eventForm,
      registrationFee: Number(eventForm.registrationFee),
      maxParticipants: Number(eventForm.maxParticipants),
      organizerContact: Number(eventForm.organizerContact),
    };

    try {
      await axios.put(
        `http://localhost:8080/ap/update/${editEvent.id}`,
        payload
      );

      // ✅ UPDATE CARD IMMEDIATELY
      setEvents((prevEvents) =>
        prevEvents.map((ev) =>
          ev.id === editEvent.id ? { ...ev, ...payload } : ev
        )
      );

      alert("✅ Event updated!");
      setIsEditing(false);
      setEditEvent(null);
    } catch (err) {
      console.error(err.response?.data);
      alert("❌ Update failed");
    }
  };

  const handleDeleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    try {
      await axios.delete(`http://localhost:8080/ap/deleteby/${id}`);
      setEvents(events.filter((e) => e.id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const renderContent = () => {
    switch (selected) {
      case "viewevents":
        return (
          <>
            <h2>All Events</h2>
            <div className="event-grid">
              {events.map((ev) => (
                <div className="event-card" key={ev.id}>
                  <img src={ev.imageUrl} alt={ev.eventName} />
                  <h3>{ev.eventName}</h3>
                  <p>📍 {ev.city}, {ev.state}</p>
                  <p>📅 {ev.eventDate}</p>
                  <p>💰 ₹{ev.registrationFee}</p>

                  <div className="card-actions">
                    <button className="edit-btn" onClick={() => handleEditClick(ev)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDeleteEvent(ev.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case "viewusers":
        const toggleBlock = (user) => {
          setUsers((prev) =>
            prev.map((u) =>
              u.id === user.id ? { ...u, blocked: !u.blocked } : u
            )
          );
        };

        return (
          <>
            <h2>👤 All Users</h2>
            <div className="users-container">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>

                      <td
                        style={{
                          color: user.blocked ? "crimson" : "lime",
                          fontWeight: "600",
                        }}
                      >
                        {user.blocked ? "Blocked" : "Active"}
                      </td>

                      <td>
                        {user.role !== "admin" && (
                          <button
                            className={user.blocked ? "unblock-btn" : "block-btn"}
                            onClick={() => toggleBlock(user)}
                          >
                            {user.blocked ? "Unblock" : "Block"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );

      case "addevent":
        return (
          <>
            <h2>➕ Add New Event</h2>
            <form className="event-form" onSubmit={handleAddEvent}>
              <input name="eventName" placeholder="Event Name" onChange={handleChange} required />
              <input name="city" placeholder="City" onChange={handleChange} required />
              <input name="state" placeholder="State" onChange={handleChange} required />
              <input name="category" placeholder="Category" onChange={handleChange} required />
              <input type="date" name="eventDate" onChange={handleChange} required />
              <input name="organizerName" placeholder="Organizer Name" onChange={handleChange} required />
              <input name="organizerEmail" placeholder="Organizer Email" onChange={handleChange} required />
              <input type="number" name="organizerContact" placeholder="Organizer Contact" onChange={handleChange} required />
              <input name="startTime" placeholder="Start Time" onChange={handleChange} />
              <input name="endTime" placeholder="End Time" onChange={handleChange} />
              <input type="number" name="registrationFee" placeholder="Fee" onChange={handleChange} />
              <input type="number" name="maxParticipants" placeholder="Max Participants" onChange={handleChange} />
              <input name="imageUrl" placeholder="Image URL" onChange={handleChange} />

              <label>
                <input type="checkbox" name="isRegistrationOpen" checked={eventForm.isRegistrationOpen} onChange={handleChange} />
                Registration Open
              </label>

              <label>
                <input type="checkbox" name="isCertificateEnabled" checked={eventForm.isCertificateEnabled} onChange={handleChange} />
                Certificate Enabled
              </label>

              <button type="submit">Add Event</button>
            </form>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ActivePulse Admin</h2>
        <ul className="admin-menu">
          <li onClick={() => setSelected("viewevents")}>📅 View All Events</li>
          <li onClick={() => setSelected("viewusers")}>👤 View All Users</li>
          <li onClick={() => setSelected("addevent")}>➕ Add Event</li>
        </ul>
      </aside>

      <main className="admin-main">{renderContent()}</main>

      {isEditing && (
        <div className="modal-overlay" onClick={() => setIsEditing(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>✏️ Edit Event</h2>

            <form onSubmit={handleUpdateEvent} className="event-form">
              <input name="eventName" value={eventForm.eventName} onChange={handleChange} required />
              <input name="city" value={eventForm.city} onChange={handleChange} required />
              <input name="state" value={eventForm.state} onChange={handleChange} required />
              <input name="category" value={eventForm.category} onChange={handleChange} required />
              <input type="date" name="eventDate" value={eventForm.eventDate} onChange={handleChange} required />
              <input name="startTime" value={eventForm.startTime} onChange={handleChange} />
              <input name="endTime" value={eventForm.endTime} onChange={handleChange} />
              <input type="number" name="registrationFee" value={eventForm.registrationFee} onChange={handleChange} />
              <input type="number" name="maxParticipants" value={eventForm.maxParticipants} onChange={handleChange} />
              <input name="organizerName" value={eventForm.organizerName} onChange={handleChange} required />
              <input name="organizerEmail" value={eventForm.organizerEmail} onChange={handleChange} required />
              <input type="number" name="organizerContact" value={eventForm.organizerContact} onChange={handleChange} required />
              <input name="imageUrl" value={eventForm.imageUrl} onChange={handleChange} />

              <label>
                <input type="checkbox" name="isRegistrationOpen" checked={eventForm.isRegistrationOpen} onChange={handleChange} />
                Registration Open
              </label>

              <label>
                <input type="checkbox" name="isCertificateEnabled" checked={eventForm.isCertificateEnabled} onChange={handleChange} />
                Certificate Enabled
              </label>

              <div className="modal-actions">
                <button type="submit">Update Event</button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
