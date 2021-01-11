import React from "react";
import styled from "styled-components";
import Tooltip from "react-simple-tooltip";

const StyledTooltip = styled(Tooltip)`
  :hover {
    color: ${(props) => props.hovercolor};
  }
`;

const withTooltip = (WrappedComponent) => ({ title, hovercolor, ...props }) => (
  <StyledTooltip
    arrow={7}
    background="rgba(38, 57, 77, .8)"
    // border="grey"
    color="white"
    content={title}
    fadeDuration={10}
    fadeEasing="linear"
    fixed={false}
    offset={0}
    fontSize="10px"
    padding={3}
    placement="bottom"
    radius={2}
    zIndex={1}
    hovercolor={hovercolor}
  >
    <WrappedComponent {...props} />
  </StyledTooltip>
);
export default withTooltip;
