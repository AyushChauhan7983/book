import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "./App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    let data = { email, password };
    axios
      .post("http://localhost:8080/api/auth/login", data)
      .then((res) => {
        let token = res.data.jwt;
        localStorage.setItem("token", token);
        sessionStorage.setItem("flag", "true");
        message.success("Login Successful");
        navigate("/book", { state: { username: email } });
      })
      .catch((err) => {
        console.log(err);
        message.error("Invalid Credentials");
      });
  };

  return (
    <>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          padding: "10px 20px",
          backgroundColor: "#f4b400",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Back to Home
      </button>
      <div className="container">
        <h2>Login</h2>
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
        <button onClick={login}>Sign In</button>
        <p
          style={{
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
