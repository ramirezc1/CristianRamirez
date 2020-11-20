import React from "react";

const ProjectItem = ({ src, children, description }) => {
  return (
    <a className="no-underline" href={src}>
      <p className="white mb2 f1 fw6 ">{children}</p>
      <p className="f7 dark-red ma0">{description}</p>
    </a>
  );
};

export default ProjectItem;
