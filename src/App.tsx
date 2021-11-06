import React from "react";

//CSS
import "./App.css";
import "react-history-search/dist/index.css";

import { store } from "./store";
import { Provider } from "react-redux";

//Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherApp, SearchHistory, Nav } from "./components";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
