import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  /* position: relative;
  margin: 20px; */
  width: fit-content;
  height: fit-content;

  /* background: rgba(255, 255, 255, 0.2); */
`;
const HeightAnimation = ({ children }) => {
  return (
    <Container
      animate={{ y: -50 }}
      transition={{ ease: "easeOut", duration: .2 }}
    >
      {children}
    </Container>
  );
};

export default HeightAnimation;
