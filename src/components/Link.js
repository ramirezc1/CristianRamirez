import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color || props.theme.linkColor};
  font-size: 5rem;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Link = ({ to, children, inputColor }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <StyledLink to={to} color={inputColor}>
        {children}
      </StyledLink>
    </motion.div>
  );
};

export default Link;
