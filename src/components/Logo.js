import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//TODO import logo as SVG and animate it
// import l from "../assets/images/logo1.svg";

const Container = styled.div`
  position: fixed;
  top: 40px;
  left: 85vw;
  height: 10vw;
  z-index: 3;
`;

const Image = styled(motion.img)`
  height: 100%;
`;
const Logo = () => {
  return (
    <Container>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <Image whileHover={{ scale: 1.1 }} src={logo}></Image>
      </Link>
    </Container>
  );
};

export default Logo;
