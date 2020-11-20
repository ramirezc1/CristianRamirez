import React, { useState } from "react";

import AnimatedContainer from "./AnimatedContainer";
import Link from "./Link";

const AnimatedSwitchLink = ({ toLink, color, fromText, toText }) => {
  const [value, setValue] = useState(false);
  return (
    <AnimatedContainer value={value} setValue={setValue} x={50}>
      {value ? (
        <Link color={color} to={toLink}>
          {toText}
        </Link>
      ) : (
        <Link color={color} to={toLink}>
          {fromText}
        </Link>
      )}
    </AnimatedContainer>
  );
};

export default AnimatedSwitchLink;
