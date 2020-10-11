import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import "./Home.css";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="center pa7">
      {/* <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact> */}
      <a href="">About</a>
      <a href="">Portfolio</a>
      <a href="">Contact</a>
    </div>
  );
};

export default Home;
