import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Icons from "./Icons";
import { SubHeadingText } from "./TextStyles";
import withHoverAnimation from "./withAnimation";

const ProjectContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1;
  opacity: 0.7;

  /* background-image: ${(props) => `url(${props.img})`}; */
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  pointer-events: auto;
  font-weight: 600;
`;

const SubHeading = styled(SubHeadingText)`
  font-size: 1rem;
  text-decoration: none;
  color: #e7040f;
  opacity: 1;
`;

const Image = styled.img`
  margin-bottom: 30px;
  margin-top: 10px;
  height: 110px;
  width: 110px;
  border-radius: 5px 20px 5px;
  box-shadow: rgba(255, 255, 255, 1) 0px 0px 0px 10px;

  /* border-radius: 45%; */
  /* box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25); */
`;
const AnimatedLink = withHoverAnimation(StyledLink);

const onHoverVariant = {
  initial: {
    opacity: 1,
  },
  hover: {
    scale: 1.2,
    opacity: 0.8,
  },
};

const Project = ({ title, description, icons, url, img }) => {
  // console.log(img);
  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ scale: 1.3, opacity: 1 }}
      transition={{
        scale: { duration: 0.3 },
      }}
    >
      <AnimatedLink variant={onHoverVariant} target="_blank" href={url}>
        {title}
      </AnimatedLink>

      <SubHeading>{description}</SubHeading>
      <Image src={img}></Image>
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
