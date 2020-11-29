import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  /* background: rgba(255, 255, 255, 0.2); */
`;

const withHoverAnimation = (WrappedComponent) => ({ variant, ...props }) => (
  <Container variants={variant} whileHover="hover" initial="initial">
    <WrappedComponent {...props} />
  </Container>
);

export default withHoverAnimation;
