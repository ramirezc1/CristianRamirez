import React from "react";
import ProjectItem from "../components/ProjectItem";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 8rem;
  padding-left: 1rem;
  width: 100%;
`;

const Portfolio = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Portfolio;
