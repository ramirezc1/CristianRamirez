import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  textColor: 'pink',
  linkColor: '#ea0f1e',
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    color: #ffffff;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23210204' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23430409' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%2364060d' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23860911' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23a70b15' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23c90d1a' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23ea0f1e' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    font-size: calc(1em + 1vw);
    width: 100vw;
    height: 100vh;
    user-select: none;
  } 
 

`;
// display: flex;
// justify-content: center;
// align-items: center;

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register();
