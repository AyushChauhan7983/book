import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const UpdateBook = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");

  const updateBook = () => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:8080/api/admin/updateBook/${isbn}/${title}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        message.success("Book updated successfully");
        setIsbn("");
        setTitle("");
      })
      .catch(() => message.error("Failed to update book. Please try again."));
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Update Book</h2>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter new title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>
      <button
        onClick={updateBook}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        Update Book
      </button>
    </div>
  );
};

export default UpdateBook;
