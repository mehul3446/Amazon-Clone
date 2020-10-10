import Home from "./Home";
import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
          

      </div>
      </Router>
    
  );
}

export default App;
