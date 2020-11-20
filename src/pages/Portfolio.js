import React from "react";
import ProjectItem from "../components/ProjectItem";

const Portfolio = () => {
  return (
    <div className="w-100 mt6 pl3">
      {/* @TODO add project links*/}
      <ProjectItem
        src="https://crwn-live-lt.herokuapp.com/"
        description="React Clothing store app"
      >
        Clothing Store
      </ProjectItem>
      <ProjectItem description="Reac FacRecognition app">
        FaceRecognition
      </ProjectItem>
      <ProjectItem description="React RobotFriends app">
        RobotFriends
      </ProjectItem>
    </div>
  );
};

export default Portfolio;
