import React from "react";
import { Routes, Route, Link, useNavigate, data } from "react-router-dom";
import AddBook from "./AddBook";
import GetBooks from "./GetBooks";
import UpdateBook from "./UpdateBook";
import RemoveBook from "./RemoveBook";
import GetBookById from "./GetBookById";
import { message } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Book = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = React.useState("");

  useEffect(() => {
    if (location.state && location.state.username) {
      const email = location.state.username;
      const name = email.split("@")[0];
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

      setUsername(formattedName);
    }
  }, [location.state]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("flag");
    message.success("Logout Successful");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar Navigation */}
      <div
        style={{
          width: "250px",
          background: "#333",
          color: "#fff",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#f4b400",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Welcome, {username || "Guest"}!
        </h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "15px" }}>
              <Link
                to="/book/add-book"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px",
                  display: "block",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "none")}
              >
                Add Book
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link
                to="/book/get-books"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px",
                  display: "block",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "none")}
              >
                Get All Books
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link
                to="/book/update-book"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px",
                  display: "block",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "none")}
              >
                Update Book
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link
                to="/book/remove-book"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px",
                  display: "block",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "none")}
              >
                Remove Book
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link
                to="/book/get-book-by-id"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px",
                  display: "block",
                  borderRadius: "5px",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#444")}
                onMouseOut={(e) => (e.target.style.background = "none")}
              >
                Get Book by ID
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#d9534f",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c9302c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#d9534f")}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f8f9fa",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="add-book" element={<AddBook />} />
          <Route path="get-books" element={<GetBooks />} />
          <Route path="update-book" element={<UpdateBook />} />
          <Route path="remove-book" element={<RemoveBook />} />
          <Route path="get-book-by-id" element={<GetBookById />} />
        </Routes>
      </div>
    </div>
  );
};

export default Book;
