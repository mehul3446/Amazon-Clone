import Home from "./Home";
import React from "react";
import "./App.css";
import Header from "./Header";
import { Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Header/>
            <Home/>
        </Switch>
          

      </div>
      </Router>
    
  );
}

export default App;
