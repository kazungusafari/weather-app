import React from "react";
import "./App.css";

import "react-history-search/dist/index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WeatherApp, SearchHistory } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-history">View Search history</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <WeatherApp />
          </Route>
          <Route path="/search-history">
            <SearchHistory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
