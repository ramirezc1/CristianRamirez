import React from "react";
import ProjectItem from "../components/ProjectItem";

const Portfolio = () => {
  return (
    <div className="fl w-100 mv6">
      {/* @TODO add project links*/}
      <ProjectItem description="Description">Project1</ProjectItem>
      <ProjectItem description="Description">Project2</ProjectItem>
      <ProjectItem description="Description">Project3</ProjectItem>
    </div>
  );
};

export default Portfolio;
