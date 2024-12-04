import React, { useState } from "react";
import axios from "axios";
import { message, Spin } from "antd";

const GetBookById = () => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBookById = () => {
    if (!isbn) {
      message.error("Please enter an ISBN.");
      return;
    }

    setLoading(true);

    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/admin/getBookById/${isbn}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBook(res.data);
        message.success("Book fetched successfully!");
      })
      .catch(() => message.error("Failed to fetch book. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Get Book by ID</h2>

      <div style={{ marginBottom: "20px" }}>
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
        onClick={fetchBookById}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? <Spin size="small" /> : "Fetch Book"}
      </button>

      {book && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          }}
        >
          <h2>Book Details</h2>
          <p>
            <strong>Title:</strong> {book.title}
          </p>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Publication Year:</strong> {book.publicationYear}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetBookById;
