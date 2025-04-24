import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice"
import { useNavigate } from "react-router-dom"; // Redirect after login
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Navigation hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        { withCredentials: true } // ✅ Important for maintaining session
      );
  
      const userData = response.data; // ✅ Expecting { name, email }
      alert(`Welcome ${userData.name}!`); // ✅ Display correct name
  
      dispatch(setUser({ name: userData.name, email: userData.email }));
  
      navigate("/");
    } catch (error) {
      alert(error.response?.data || "Login failed");
    }
  };
  

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
