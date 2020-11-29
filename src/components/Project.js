import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import { SubHeadingText } from "./TextStyles";
import withHoverAnimation from "./withAnimation";

const ProjectContainer = styled(motion.div)`
  z-index: 2;
  opacity: 1;
  pointer-events: none;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 25px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 3.5rem;
  pointer-events: auto;
  font-weight: 600;
`;

const SubHeading = styled(SubHeadingText)`
  font-size: 1rem;
  text-decoration: none;
  color: #e7040f;
  opacity: 0.8;
`;

const AnimatedLink = withHoverAnimation(StyledLink);

const onHoverVariant = {
  initial: {
    opacity: 0.8,
  },
  hover: {
    scale: 1.2,
    opacity: 1,
  },
};

const Project = ({ title, description, icons, url }) => (
  <ProjectContainer
    initial={{ opacity: 0 }}
    animate={{ scale: 1.3, opacity: 1 }}
    transition={{
      scale: { duration: 0.5 },
    }}
  >
    <AnimatedLink variant={onHoverVariant} target="_blank" href={url}>
      {title}
    </AnimatedLink>

    <SubHeading>{description}</SubHeading>
    <Icons {...icons} variant={onHoverVariant}></Icons>
  </ProjectContainer>
);

export default Project;
