import React from "react";
import { Link as RouterLink } from "react-router-dom";
const Link = ({ to, children, color }) => {
  return (
    <RouterLink
      to={to}
      className={`${color} dim no-underline mb3 f-headline lh-solid`}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
