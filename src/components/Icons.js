import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Reactrouter } from "@icons-pack/react-simple-icons";
import { ReactJs } from "@icons-pack/react-simple-icons";
import { Redux } from "@icons-pack/react-simple-icons";
import { Css3 } from "@icons-pack/react-simple-icons";
import { Html5 } from "@icons-pack/react-simple-icons";
import { StyledComponents } from "@icons-pack/react-simple-icons";

const Container = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: space-around;
  height: fit-content;
  color: white;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Icons = ({
  reactjs,
  html,
  css,
  styledComponents,
  reactRouter,
  redux,
  variant,
}) => (
  <Container variants={variant} whileHover="hover" initial="initial">
    {reactjs && <ReactJs />}
    {html && <Html5 />}
    {css && <Css3 />}
    {styledComponents && <StyledComponents />}
    {redux && <Redux />}
    {reactRouter && <Reactrouter />}
  </Container>
);

export default Icons;
