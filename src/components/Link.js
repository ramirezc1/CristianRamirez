import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color};
  font-size: 5rem;
  text-decoration: none;
  margin-bottom: 1rem;
`;
const Link = ({ to, children, color }) => {
  return (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  );
};

export default Link;
