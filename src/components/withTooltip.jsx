import React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-simple-tooltip';
import PropTypes from 'prop-types';

const StyledTooltip = styled(Tooltip)`
  :hover {
    color: ${(props) => props.hovercolor};
  }
`;

const withTooltip = (Component) => {
  const WrappedComponent = ({ title, hovercolor }) => (
    <StyledTooltip
      arrow={7}
      background='rgba(38, 57, 77, .8)'
      // border="grey"
      color='white'
      content={title}
      fadeDuration={10}
      fadeEasing='linear'
      fixed={false}
      offset={0}
      fontSize='10px'
      padding={3}
      placement='bottom'
      radius={2}
      zIndex={1}
      hovercolor={hovercolor}
    >
      <Component />
    </StyledTooltip>
  );
  WrappedComponent.propTypes = {
    title: PropTypes.string.isRequired,
    hovercolor: PropTypes.string.isRequired,
  };
  return WrappedComponent;
};

export default withTooltip;
