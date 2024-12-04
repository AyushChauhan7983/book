import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = () => {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:8080/api/admin/getBooks", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setBooks(res.data);
        })
        .catch(() => message.error("Failed to fetch books. Please try again."));
    };

    fetchBooks();
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Get All Books</h2>

      {books.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {books.map((book) => (
            <li
              key={book.isbn}
              style={{
                padding: "15px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 style={{ margin: "0" }}>
                <strong>Title:</strong> {book.title}
              </h4>
              <p style={{ margin: "5px 0" }}>
                <strong>Author:</strong> {book.author}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Year:</strong> {book.publicationYear}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>ISBN:</strong> {book.isbn}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
          No books available. Please try again later.
        </p>
      )}
    </div>
  );
};

export default GetBooks;
