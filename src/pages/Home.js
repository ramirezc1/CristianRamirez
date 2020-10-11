import React from "react";
// import About from "./About";
// import Portfolio from "./Portfolio";
import "./Home.css";
// import Contact from "./Contact";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="pa7 f1 flex flex-column sans-serif fw8 no-underline">
      <Link
        className="white dim no-underline mb3 f-headline lh-solid"
        to="/about"
      >
        About
      </Link>
      <Link
        className="dark-red dim no-underline mb3 f-headline lh-solid"
        to="/portfolio"
      >
        Porfolio
      </Link>
      <Link
        className="dark-red dim no-underline mb3 f-headline lh-solid"
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default Home;
