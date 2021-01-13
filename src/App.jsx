import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => (
  <>
    <AnimatePresence>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </AnimatePresence>
  </>
);

export default App;
