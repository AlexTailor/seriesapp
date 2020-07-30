import React from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";

const NavBar = () => {
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/shows">TV Series</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/channels">Channels</Link>
          <Link to="/#">Web Channels</Link>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
