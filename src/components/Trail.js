import React from "react";
import { animated, useTrail } from "react-spring";

const Trail = ({ x, y }) => {
  const trail = useTrail(4, {
    transform: `translate($(x)px, $(y)px)`,
  });
  return trail.map((style) => <animated.div style={style} />);
};

export default Trail;
