import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const RemoveBook = () => {
  const [isbn, setIsbn] = useState("");

  const removeBook = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:8080/api/admin/removeBook/${isbn}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => message.success("Book removed successfully!"))
      .catch(() => message.error("Failed to remove book. Please try again."));
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
      <h2 style={{ textAlign: "center", color: "#333" }}>Remove Book</h2>
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
      <button
        onClick={removeBook}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
      >
        <DeleteOutlined style={{ marginRight: "8px" }} /> Remove Book
      </button>
    </div>
  );
};

export default RemoveBook;
