import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => (
  <>
    <AnimatePresence>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
        <Route
          path={`${process.env.PUBLIC_URL}/portfolio`}
          component={Portfolio}
        />
        <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      </Switch>
    </AnimatePresence>
  </>
);

export default App;