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
  const WrappedComponent = ({ variant, ...props }) => (
    <Container variants={variant} whileHover='hover' initial='initial'>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...props} />
    </Container>
  );
  WrappedComponent.propTypes = {
    variant: PropTypes.objectOf(PropTypes.object).isRequired,
  };
  return WrappedComponent;
};

export default withHoverAnimation;
