import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shows from "./pages/Shows";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Route exact path="/shows" component={Shows} />
          <Route path="/shows" component={Detail} />
        </div>
      </div>
    </Router>
  );
}

export default App;
