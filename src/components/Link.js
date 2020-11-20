import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color || props.theme.linkColor};
  font-size: 5.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Link = ({ to, children, inputColor }) => {
  return (
    <StyledLink to={to} color={inputColor}>
      {children}
    </StyledLink>
  );
};

export default Link;
