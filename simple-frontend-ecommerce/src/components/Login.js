import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8003/auth/login", {
        email,
        password,
      })
      .then((res) => {
        // Handle successful signup, e.g., redirect to dashboard
        const userID = res.data.data._id;
        navigate(`/seller-dashboard/${userID}`);
      })
      .catch((err) => {
        // Handle signup error
        console.log(err.response.data.message);
        setMessage(err.response.data.message);
        window.alert(err.response.data.message);
      });
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
