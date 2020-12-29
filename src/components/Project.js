import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import { SubHeadingText } from "./TextStyles";

const ProjectContainer = styled(motion.div)`
  position: absolute;
  height: 70vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  z-index: 1;
  opacity: 0.7;

  /* background-image: ${(props) => `url(${props.img})`}; */
`;

const Heading = styled.h1`
  color: white;
  margin: 0px;
  font-size: 2rem;
  font-weight: 600;
`;

const SubHeading = styled(SubHeadingText)`
  font-size: 1rem;
  text-decoration: none;
  color: #e7040f;
  opacity: 1;
`;

const Image = styled.img`
  height: 150px;
  width: 220px;
  border-radius: 5px 20px 5px;
  margin-bottom: 20px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 1) 0px 0px 0px 10px;
  /* border-radius: 45%; */
  /* box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25); */
`;

const StyledLink = styled(motion.a)`
  padding: 0.35rem;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
  color: #e7040f;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const LinkContainer = styled.div`
  width: 60%;
  font-size: 0.5rem;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;
const onHoverVariant = {
  initial: {
    opacity: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const Project = ({ title, description, icons, url, projectUrl, img }) => {
  // console.log(img);
  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ scale: 1.3, opacity: 1 }}
      transition={{
        scale: { duration: 0.3 },
      }}
    >
      <Heading>{title}</Heading>

      <SubHeading>{description}</SubHeading>
      <Image alt="project screenshot" src={img}></Image>
      <LinkContainer>
        <StyledLink whileHover={{ scale: 1.1 }} target="_blank" href={url}>
          Live Demo
        </StyledLink>
        <StyledLink
          whileHover={{ scale: 1.1 }}
          target="_blank"
          href={projectUrl}
        >
          GitHub
        </StyledLink>
      </LinkContainer>
      <Icons
        {...icons}
        variants={onHoverVariant}
        whileHover="hover"
        initial="initial"
      ></Icons>
    </ProjectContainer>
  );
};
export default Project;
