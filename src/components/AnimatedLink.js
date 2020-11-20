import React, { useState } from "react";

import AnimatedContainer from "./AnimatedContainer";

const AnimatedLink = ({ color, children }) => {
  const [value, setValue] = useState(false);
  return (
    <AnimatedContainer value={value} setValue={setValue} x={100}>
      <p>{children}</p>
    </AnimatedContainer>
  );
};

export default AnimatedLink;
