import React from "react";
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
          <Route exact path="/cristianramirez/" component={Home} />
          <Route path="/cristianramirez/about" component={About} />
          <Route path="/cristianramirez/portfolio" component={Portfolio} />
          <Route path="/cristianramirez/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
