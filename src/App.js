import Home from "./Home";
import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/Checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
