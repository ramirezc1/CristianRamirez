import React, { lazy, Suspense } from "react";
import AnimatedSwitchLink from "../components/AnimatedSwitchLink";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const img = lazy(() => import("../assets/images/me.webp"));
//TODO add loader component
const Loader = () => <p>Loading...</p>;

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
        toLink={`${process.env.PUBLIC_URL}/about`}
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="I am  "
        toText="Portfolio"
        toLink={`${process.env.PUBLIC_URL}/portfolio`}
      ></AnimatedSwitchLink>
      <AnimatedSwitchLink
        fromText="Cristian"
        toText="Contact"
        toLink={`${process.env.PUBLIC_URL}/contact`}
      ></AnimatedSwitchLink>

      <Suspense fallback={Loader()}>
        <BigImage></BigImage>
      </Suspense>
    </Container>
  );
};

export default Home;
