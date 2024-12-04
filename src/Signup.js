import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("0");
  const navigate = useNavigate();

  const signup = () => {
    let data = { name, email, password, userRole: role };
    axios
      .post("http://localhost:8080/api/auth/signup", data)
      .then(() => {
        message.success("Signup Successful");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        message.error("Invalid Credentials");
      });
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          padding: "8px 10px",
          fontSize: "14px",
          marginTop: "10px",
          marginBottom: "15px",
          width: "90%",
          maxWidth: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
        onMouseEnter={(e) => (e.target.style.borderColor = "#007BFF")}
        onMouseLeave={(e) => (e.target.style.borderColor = "#ccc")}
      >
        <option value="0">Admin</option>
        <option value="1">User</option>
      </select>

      <button onClick={signup}>Sign Up</button>

      <p
        style={{
          marginTop: "20px",
        }}
      >
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
