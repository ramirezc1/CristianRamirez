import React from "react";
import { animated, useSpring } from "react-spring";
const AnimateBounce = ({ children, x = 0, y = 0, dx = 0, dy = 0 }) => {
  const style = useSpring({
    from: { xy: [x, y], opacity: 0 },
    xy: [dx, dy],
    opacity: 1,
    config: {
      tension: 280,
      friction: 60,
    },
  });
  return (
    <animated.div
      style={{
        ...style,
        transform: style.xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimateBounce;
