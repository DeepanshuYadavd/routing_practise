import { useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import signupAnimation from "../assets/signup.json";
import "./Signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Lottie Section */}
        <div className="lottie-section">
          <Lottie animationData={signupAnimation} loop={true} />
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h1>Create Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <span>
              <Link className="link" to="/signin">
                signin
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
