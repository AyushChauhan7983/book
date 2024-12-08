import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Book from "./Book";
import Protected from "./Protected";
import Home from "./Home";
import HolidayCalendar from "./Calendar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<HolidayCalendar />} />
        <Route path="/book/*" element={<Protected Component={Book} />} />
      </Routes>
    </Router>
  );
};

export default App;
