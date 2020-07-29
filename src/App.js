import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shows from "./pages/Shows";
import Detail from "./pages/Details";
import Main from "./pages/Main";

import { IdProvider } from "./contexts/IdProviderContext";
import { DetailProvider } from "./contexts/DetailProvider";
import "./App.css";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <IdProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route exact path="/shows" component={Shows} />
            <DetailProvider>
              <Route exact path="/shows/:id" component={Detail} />
              <Route exact path="/shows/:id/main" component={Main} />
              <Route exact path="/shows/:id/episodes" component={Episodes} />
            </DetailProvider>
          </div>
        </div>
      </Router>
    </IdProvider>
  );
}

export default App;
