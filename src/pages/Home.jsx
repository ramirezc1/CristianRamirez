// import React, { lazy, Suspense } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedSwitchLink from '../components/AnimatedSwitchLink';
import Logo from '../components/Logo';
import img from '../assets/images/me.webp';

// const img = lazy(() => import("../assets/images/me.webp"));
// TODO add loader component

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

const Home = () => (
  <Container>
    <Logo />

    <AnimatedSwitchLink
      inputColor='#ffffff'
      fromText='Hello.'
      toText='About'
      toLink={`${process.env.PUBLIC_URL}/about`}
    />
    <AnimatedSwitchLink
      fromText='I am  '
      toText='Portfolio'
      toLink={`${process.env.PUBLIC_URL}/portfolio`}
    />
    <AnimatedSwitchLink
      fromText='Cristian'
      toText='Contact'
      toLink={`${process.env.PUBLIC_URL}/contact`}
    />

    {/* <Suspense fallback={<p>Loading...</p>}> */}
    <BigImage />
    {/* </Suspense> */}
  </Container>
);

export default Home;
