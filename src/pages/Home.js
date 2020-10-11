import React from "react";
// import About from "./About";
// import Portfolio from "./Portfolio";
import "./Home.css";
// import Contact from "./Contact";
import Link from "../components/Link";
const path = "../../public/logo512.png";
const Home = () => {
  return (
    <div className="pt7 pl5 f1 flex flex-column sans-serif fw8 no-underline">
      <Link color="white" to="/about">
        About
      </Link>
      <Link color="dark-red" to="/portfolio">
        Portfolio
      </Link>
      <Link color="dark-red" to="/contact">
        Contact
      </Link>
      <div
        className="bg_image twic"
        data-background="url(placeholder:auto)"
      ></div>
    </div>
  );
};

export default Home;
