import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
const theme = {
  textColor: "pink",
  linkColor: "#ea0f1e",
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
    background: black;
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
  document.getElementById("root")
);
