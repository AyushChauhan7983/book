import axios from "axios";
import { useState } from "react";
import "./App.css";

const Auth = () => {
  let [name, setName] = useState();
  let [email, setMail] = useState();
  let [password, setPassword] = useState();
  let [role, setRole] = useState();

  const signup = () => {
    let data = { name, email, password, userRole: role };
    axios
      .post("http://localhost:8080/api/auth/signup", data)
      .then((res) => {
        alert("user created");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    let data = { email, password };
    axios
      .post("http://localhost:8080/api/auth/login", data)
      .then((res) => {
        let token = res.data.jwt;
        localStorage.setItem("token", token);
        alert("user logged in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter email"
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="Password"
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter role"
        onChange={(e) => setRole(e.target.value)}
      />

      <button onClick={signup}> sign up</button>

      <button onClick={login}> sign in</button>
    </div>
  );
};

export default Auth;
