import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.svg';

const Container = styled.div`
  position: fixed;
  top: 40px;
  left: 85vw;
  z-index: 3;
  @media only screen and (max-width: 600px) {
    top: 20px;
    left: 80vw;
  }
`;

const Image = styled(motion.img)`
  height: 100%;
  width: 150px;
  height: 150px;
  @media only screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;
const Logo = () => (
  <Container>
    <Link to={`${process.env.PUBLIC_URL}/`}>
      <Image alt='logo' whileHover={{ scale: 1.1 }} src={logo} />
    </Link>
  </Container>
);

export default Logo;
