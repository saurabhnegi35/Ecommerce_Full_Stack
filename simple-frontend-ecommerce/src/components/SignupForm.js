import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, businessName, password);

    axios
      .post("http://localhost:8003/auth/register", {
        email,
        businessName,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        // Handle successful signup, e.g., redirect to dashboard
        const userID = res.data.data._id;
        navigate(`/dashboard/${userID}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        // Handle signup error
      });
  };

  return (
    <div className="signup">
      <div className="signup-form-container">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
