import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header style={headerStyle}>
      <div className="NavBar">
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
    </header>
  );
};

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

export default NavBar;
