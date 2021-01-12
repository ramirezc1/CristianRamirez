import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  /* background: rgba(255, 255, 255, 0.2); */
`;

const withHoverAnimation = (Component) => {
  const WrappedComponent = ({ variant }) => (
    <Container variants={variant} whileHover='hover' initial='initial'>
      <Component />
    </Container>
  );
  WrappedComponent.propTypes = {
    variant: PropTypes.objectOf(PropTypes.string).isRequired,
  };
  return WrappedComponent;
};

export default withHoverAnimation;
