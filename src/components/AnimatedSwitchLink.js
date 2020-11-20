import React, { useState } from "react";

import AnimatedContainer from "./AnimatedContainer";
import Link from "./Link";


const AnimatedSwitchLink = ({ toLink, inputColor, fromText, toText }) => {
  const [value, setValue] = useState(false);
  return (
    <AnimatedContainer value={value} setValue={setValue} x={50}>
      {value ? (
        <Link inputColor={inputColor} to={toLink}>
          {toText}
        </Link>
      ) : (
        <Link inputColor={inputColor} to={toLink}>
          {fromText}
        </Link>
      )}
    </AnimatedContainer>
  );
};

export default AnimatedSwitchLink;
