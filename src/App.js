import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shows from "./pages/Shows";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Route path="/shows" component={Shows} />
        </div>
      </div>
    </Router>
  );
}

export default App;
