import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from './Link';

const Container = styled(motion.div)`
  position: relative;
  margin: 20px;
  width: fit-content;
  z-index: 1;
  /* background: rgba(255, 255, 255, 0.2); */
`;

const AnimatedSwitchLink = ({ toLink, inputColor, fromText, toText }) => {
  const [value, setValue] = useState(false);
  return (
    <Container
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      onHoverStart={() => {
        setValue(true);
      }}
      onHoverEnd={() => {
        setValue(false);
      }}
    >
      {value ? (
        <Link inputColor={inputColor} to={toLink}>
          {toText}
        </Link>
      ) : (
        <Link inputColor={inputColor} to={toLink}>
          {fromText}
        </Link>
      )}
    </Container>
  );
};

AnimatedSwitchLink.propTypes = {
  toLink: PropTypes.string.isRequired,
  inputColor: PropTypes.string.isRequired,
  fromText: PropTypes.string.isRequired,
  toText: PropTypes.string.isRequired,
};
export default AnimatedSwitchLink;
