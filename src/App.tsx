import React from "react";

//CSS
import "./App.css";
import "react-history-search/dist/index.css";

//Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherApp, SearchHistory, Nav } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
