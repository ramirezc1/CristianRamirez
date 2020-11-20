import React, { useState } from "react";

import AnimatedContainer from "./AnimatedContainer";

const AnimatedLink = ({ children }) => {
  const [value, setValue] = useState(false);
  return (
    <AnimatedContainer value={value} setValue={setValue} x={100}>
      {children}
    </AnimatedContainer>
  );
};

export default AnimatedLink;
