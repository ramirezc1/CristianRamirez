import React from "react";

const ProjectItem = ({ children, description }) => {
  return (
    <div>
      <h1 className="mb2">{children}</h1>
      <p className="f6 dark-red ma0">{description}</p>
    </div>
  );
};

export default ProjectItem;
