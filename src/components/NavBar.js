import React from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";

export default function NavBar() {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/shows">TV Series</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/channels">Channels</Link>
          <a href="#">Web Channels</a>
        </nav>
        <nav className="sub-nav">
          <a href="#">
            <i className="fas fa-search sub-nav-logo"></i>
          </a>
          <a href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </a>
          <a href="#">Account</a>
        </nav>
      </header>
    </div>
    /* <div className="NavBar">
        <h1>TV Series</h1>
        <Link style={linkStyle} to="/shows">
          Shows
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/staff">
          Staff
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/channels">
          Channels
        </Link>
      </div>
    </header> */
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
