
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "../styles/Auth.css";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//     dob: "",
//     city: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8080/user/add", {
//         name: form.name,
//         email: form.email,
//         contact: Number(form.contact),
//         password: form.password,
//         gender: form.gender,
//         dob: form.dob,
//         city: form.city
//       });

//       navigate("/login");
//     } catch {
//       setError("Registration failed. Please check inputs.");
//     }
//   };

//   return (
//     <div
//       className="auth-container"
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             rgba(0, 0, 0, 0.75),
//             rgba(0, 0, 0, 0.85)
//           ),
//           url('/images/lr-bg.avif')
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <form className="auth-card" onSubmit={handleRegister}>
//         <h2>Register</h2>

//         {error && <p className="error-text">{error}</p>}

//         <input name="name" placeholder="Full Name" onChange={handleChange} required />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <input name="contact" placeholder="Contact Number" onChange={handleChange} required />

//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />
//           <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         <div className="password-field">
//           <input
//             type={showConfirm ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             onChange={handleChange}
//             required
//           />
//           <span className="toggle-eye" onClick={() => setShowConfirm(!showConfirm)}>
//             {showConfirm ? "🙈" : "👁️"}
//           </span>
//         </div>

//         <select name="gender" onChange={handleChange} required>
//           <option value="" disabled hidden>Select Gender</option>
//           <option>Male</option>
//           <option>Female</option>
//           <option>Other</option>
//         </select>

//         <input type="date" name="dob" onChange={handleChange} required />
//         <input name="city" placeholder="City" onChange={handleChange} required />

//         <button type="submit">Create Account</button>

//         <p className="auth-switch">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    city: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!/^\d{10}$/.test(form.contact)) {
      newErrors.contact = "Contact must be a 10-digit number";
    }

    if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(form.password)) {
      newErrors.password =
        "Password must be 8+ chars, 1 uppercase & 1 special character";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await axios.post("http://localhost:8080/user/add", {
        name: form.name,
        email: form.email,
        contact: Number(form.contact),
        password: form.password,
        gender: form.gender,
        dob: form.dob,
        city: form.city
      });

      navigate("/login");
    } catch {
      setError("Registration failed. Please check inputs.");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
          url('/images/lr-bg.avif')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Register</h2>

        {error && <p className="error-text">{error}</p>}

        <input name="name" placeholder="Full Name" onChange={handleChange} required />

        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        {errors.email && <p className="field-error">{errors.email}</p>}

        <input name="contact" placeholder="Contact Number" onChange={handleChange} required />
        {errors.contact && <p className="field-error">{errors.contact}</p>}

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        {errors.password && <p className="field-error">{errors.password}</p>}

        <div className="password-field">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <span className="toggle-eye" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? "🙈" : "👁️"}
          </span>
        </div>
        {errors.confirmPassword && (
          <p className="field-error">{errors.confirmPassword}</p>
        )}

        <select name="gender" onChange={handleChange} required>
          <option value="" disabled hidden>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="date" name="dob" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />

        <button type="submit">Create Account</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
