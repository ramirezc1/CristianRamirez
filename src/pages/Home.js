import React, { useState } from "react";
import "./Home.css";
import AnimatedSwitchLink from "../components/AnimatedSwitchLink";
import { useSpring, animated } from "react-spring";

const Home = () => {
  return (
    <div className="pt5 pl5 flex flex-column sans-serif fw7 no-underline">
      <AnimatedSwitchLink
        color="white"
        fromText="Hello."
        toText="About"
        toLink="/about"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        color="red"
        fromText="I am  "
        toText="Portfolio"
        toLink="/portfolio"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        color="red"
        fromText="Cristian"
        toText="Contact"
        toLink="/contact"
      ></AnimatedSwitchLink>

      <div
        className="bg_image"
        // className="bg_image twic"
        // data-background="url(placeholder:auto)"
      ></div>
    </div>
  );
};

export default Home;
