import React from "react";
import { useSpring, animated } from "react-spring";
import "./AnimatedContainer.css";

const AnimatedContainer = ({ value, setValue, children, x = 0, y = 0 }) => {
  const { xy } = useSpring({
    from: { xy: [0, 0] },
    xy: value ? [x, y] : [0, 0],
  });
  return (
    <animated.div
      className="homeContainer"
      style={{
        transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
      }}
      onMouseOut={() => setValue(false)}
      onMouseEnter={() => setValue(true)}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedContainer;
