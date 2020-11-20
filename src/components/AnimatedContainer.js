import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 5px;
  width: 50%;
  z-index: 1;
`;

const AnimatedContainer = ({ value, setValue, children, x = 0, y = 0 }) => {
  const { xy } = useSpring({
    from: { xy: [0, 0] },
    xy: value ? [x, y] : [0, 0],
  });
  return (
    <Wrapper>
      <animated.div
        style={{
          transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
        }}
        onMouseOut={() => setValue(false)}
        onMouseEnter={() => setValue(true)}
      >
        {children}
      </animated.div>
    </Wrapper>
  );
};

export default AnimatedContainer;
