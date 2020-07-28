import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shows from "./pages/Shows";
import Detail from "./pages/Detail";
import { IdProvider } from "./contexts/IdProviderContext";
import "./App.css";

function App() {
  return (
    <IdProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/shows" component={Shows} />
            <Route path="/show/:id" component={Detail} />
          </div>
        </div>
      </Router>
    </IdProvider>
  );
}

export default App;
