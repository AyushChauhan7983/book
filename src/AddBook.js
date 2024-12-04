import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [pyear, setPyear] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:8080/api/admin/addNewBook",
        { title, publicationYear: pyear, author },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        message.success("Book added successfully!");
        setTitle("");
        setPyear("");
        setAuthor("");
      })
      .catch(() => message.error("Failed to add book. Please try again."));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Add a New Book</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter publication year"
          value={pyear}
          onChange={(e) => setPyear(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
