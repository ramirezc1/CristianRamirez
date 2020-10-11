import React from "react";
import "./App.css";
import "tachyons";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={Home} />
        <Route path="/about" render={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
