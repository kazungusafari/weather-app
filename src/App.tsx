import React from "react";
import "./App.css";

import "react-history-search/dist/index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { WeatherAppContainer, SearchHistoryContainer } from "./containers";

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
            <WeatherAppContainer />
          </Route>
          <Route path="/search-history">
            <SearchHistoryContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
