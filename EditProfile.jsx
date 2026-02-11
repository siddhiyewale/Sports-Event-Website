import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: user.name,
    contact: user.contact,
    gender: user.gender,
    dob: user.dob,
    city: user.city,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const updateProfile = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:8080/user/update/${user.id}`,
      { ...user, ...form }
    );

    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/user");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={updateProfile}>
        <h2>Edit Profile</h2>

        <input name="name" value={form.name} onChange={handleChange} />
        <input name="contact" value={form.contact} onChange={handleChange} />
        <input name="dob" type="date" value={form.dob} onChange={handleChange} />
        <input name="city" value={form.city} onChange={handleChange} />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
