import React from "react";
import "tachyons";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
