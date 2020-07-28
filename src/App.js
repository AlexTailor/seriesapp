import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
      </div>
    </Router>
  );
}

export default App;
