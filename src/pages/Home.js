import React from "react";
import AnimatedSwitchLink from "../components/AnimatedSwitchLink";
import styled from "styled-components";
import img from "./me.png";

const BigImage = styled.div`
  background-size: cover;
  background-image: url(${img});
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
`;

const Container = styled.div`
  padding-top: 4rem;
  padding-left: 4rem;
`;

const Home = () => {
  return (
    <Container>
      <AnimatedSwitchLink
        inputColor="white"
        fromText="Hello."
        toText="About"
        toLink="/about"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="I am  "
        toText="Portfolio"
        toLink="/portfolio"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="Cristian"
        toText="Contact"
        toLink="/contact"
      ></AnimatedSwitchLink>

      <BigImage
      // className="bg_image"
      // className="bg_image twic"
      // data-background="url(placeholder:auto)"
      ></BigImage>
    </Container>
  );
};

export default Home;
