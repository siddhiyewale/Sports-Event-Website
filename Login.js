// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";
// import "../styles/PageBackground.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//   const res = await axios.get("http://localhost:8080/user/login", {
//     params: {
//       email,
//       password,
//     },
//   });

//   localStorage.setItem("user", JSON.stringify(res.data));
//   navigate("/");

// } catch (err) {
//   if (err.response?.status === 403) {
//     alert("🚫 Your account has been blocked by admin");
//   } else {
//     alert("❌ Invalid email or password");
//   }
// }
//   };


//   return (
//     <div className="login-page">
//       <form className="login-box" onSubmit={handleLogin}>
//         <h2>Login</h2>

//         {error && <p className="error">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         {/* PASSWORD WITH TOGGLE */}
//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <span
//             className="toggle-eye"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.get("http://localhost:8080/user/login", {
        params: { email, password },
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      if (err.response?.status === 403) {
        alert("🚫 Your account has been blocked by admin");
      } else {
        alert("❌ Invalid email or password");
      }
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.85)
          ),
          url('/images/lr-bg.avif')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
