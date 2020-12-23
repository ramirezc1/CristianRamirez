import React from "react";
import AnimatedSwitchLink from "../components/AnimatedSwitchLink";
import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../assets/images/me.png";
import logo from "../assets/images/logo2.png";

const BigImage = styled.div`
  background-size: cover;
  background-image: url(${img});
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 25%;
  @media only screen and (max-width: 600px) {
    left: -10%;
  }
`;

const Logo = styled.div`
  background-image: url(${logo});
`;

const Container = styled(motion.div)`
  padding-top: 4rem;
  padding-left: 4rem;
  max-height: 100vh;
  @media only screen and (max-width: 600px) {
    padding-left: 1rem;
    height: 100vh;
  }
`;

const Home = () => {
  return (
    <Container>
      <Logo></Logo>
      <AnimatedSwitchLink
        inputColor="#ffffff"
        fromText="Hello."
        toText="About"
        toLink="/cristianramirez/about"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="I am  "
        toText="Portfolio"
        toLink="/cristianramirez/portfolio"
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="Cristian"
        toText="Contact"
        toLink="/cristianramirez/contact"
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
