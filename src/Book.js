import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Book = () => {
  let [title, seTitle] = useState();
  let [pyear, setPyear] = useState();
  let [author, setAuthor] = useState();
  let [books, setBooks] = useState([]);
  let [isbn, setIsbn] = useState();
  let [book, setBook] = useState();
  let [error, setError] = useState();

  const addBook = () => {
    let data = { title, publicationYear: pyear, author };
    let token = localStorage.getItem("token");
    axios
      .post("http://localhost:8080/api/admin/addNewBook", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("book added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBooks = () => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/admin/getBooks", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeBook = () => {
    let token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:8080/api/admin/removeBook/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alert("book removed"))
      .catch((e) => console.log(e));
  };

  const updateBook = () => {
    let token = localStorage.getItem("token");

    axios
      .put(
        `http://localhost:8080/api/admin/updateBook/${isbn}/${title}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => alert("Book updated successfully!"))
      .catch((e) => {
        console.error("Error updating book:", e);
        alert("Failed to update book. Please try again.");
      });
  };

  const getBookById = () => {
    console.log("Getbookbyid initiated");

    let token = localStorage.getItem("token");

    axios
      .get(`http://localhost:8080/api/admin/getBookById/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Response from API:", res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => seTitle(e.target.value)}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder="Enter year"
          onChange={(e) => setPyear(e.target.value)}
        />

        <br />
        <br />
        <input
          type="text"
          placeholder="Enter author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <br />
        <br />
        <input
          type="number"
          placeholder="Enter ISBN"
          onChange={(e) => setIsbn(e.target.value)}
        />

        <br />
        <button onClick={addBook}> Add book </button>
        <br />
        <br />
        <button onClick={getBooks}> Get books </button>
        <br />
        <br />
        <button onClick={removeBook}> Remove book </button>
        <br />
        <br />
        <button onClick={updateBook}> Update book </button>
        <br />
        <br />
        <button onClick={getBookById}> Get book by id </button>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {book && (
          <div>
            <h4>Title: {book.title}</h4>
            <h4>Author: {book.author}</h4>
            <h4>Publication Year: {book.publicationYear}</h4>
          </div>
        )}
      </div>

      <div className="container-books">
        {books.map((book) => {
          return (
            <div key={book.isbn}>
              <h4>ISBN: {book.isbn}</h4>
              <h4>Title: {book.title}</h4>
              <h4>Author: {book.author}</h4>
              <h4>Published Year: {book.publicationYear}</h4>
              <br />
              <h3>---------------------------------------</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Book;
