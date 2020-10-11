import React from "react";
import "./Home.css";
import Link from "../components/Link";
const Home = () => {
  return (
    <div className="container mt6 pl5 flex flex-column sans-serif fw8 no-underline">
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
