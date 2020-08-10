import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";
import { DetailContext } from "../contexts/DetailProvider";

const NavBar = () => {
  const { fetchSeries } = useContext(DetailContext);

  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/shows" onClick={() => fetchSeries()}>
            TV Series
          </Link>
          <Link to="/staff">Staff</Link>
          <Link to="/channels">Channels</Link>
          <Link to="/#">Web Channels</Link>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
