import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Shows from "./pages/Shows";
import Detail from "./pages/Details";
import Main from "./pages/Main";
import Home from "./components/Home";
import { IdProvider } from "./contexts/IdProviderContext";
import { DetailProvider } from "./contexts/DetailProvider";
import "./App.css";
import Episodes from "./pages/Episodes";
import Staff from "./pages/Staff";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <IdProvider>
      <Router>
        <div className="App">
          <DetailProvider>
            <NavBar />
            <div className="container">
              <Route exact path="/shows" component={Shows} />
              <Route
                exact
                path="/show/search/:value"
                component={SearchResult}
              />
              <Route exact path="/shows/:id" component={Detail} />
              <Route exact path="/shows/:id/main" component={Main} />
              <Route exact path="/shows/:id/episodes" component={Episodes} />
              <Route exact path="/shows/:id/staff" component={Staff} />
              <Route exact path="/" component={Home} />
            </div>
          </DetailProvider>
        </div>
      </Router>
    </IdProvider>
  );
}

export default App;
