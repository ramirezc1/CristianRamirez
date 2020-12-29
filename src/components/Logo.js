import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.div`
  position: fixed;
  top: 40px;
  left: 85vw;
  height: 10vw;
  z-index: 3;
`;

const Image = styled(motion.img)`
  height: 100%;
  transform: rotate(90deg);
`;
const Logo = () => {
  return (
    <Container>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <Image alt="logo" whileHover={{ scale: 1.1 }} src={logo}></Image>
      </Link>
    </Container>
  );
};

export default Logo;
