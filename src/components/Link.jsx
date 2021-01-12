import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.color || props.theme.linkColor};
  font-size: 18vmin;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Link = ({ to, children, inputColor }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <StyledLink to={to} color={inputColor}>
      {children}
    </StyledLink>
  </motion.div>
  );

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  inputColor: PropTypes.string.isRequired,
};
export default Link;
