import React from "react";

import styled from "styled-components";
import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";
import HeightAnimation from "../components/HeightAnimation";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import withHoverAnimation from "../components/withAnimation";
import img from "./family.JPG";
import Logo from "../components/Logo";
import { Adobe } from "@icons-pack/react-simple-icons";
import { Github } from "@icons-pack/react-simple-icons";

// const LinkWithAnimation = withAnimation(Link);
const Container = styled.div`
  margin: 0 auto;
  max-width: 86%;
`;

const SubContainer = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    margin: auto;
    padding-top: 1rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px 20px 5px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const AboutContainer = styled.section`
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 5rem;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    margin: auto;
    max-width: 100%;
    padding-top: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 700;
`;

const AnimatedLink = withHoverAnimation(StyledLink);

const onHoverVariant = {
  hover: {
    x: 20,
  },
};

const About = () => {
  return (
    <Container>
      <Logo></Logo>

      <SubContainer>
        <HeightAnimation>
          <HeadingText>Hello and Welcome to my website.</HeadingText>
        </HeightAnimation>
      </SubContainer>

      <Image src={img}></Image>
      <AboutContainer>
        <SubHeadingText>About</SubHeadingText>

        <Text>My name is Cristian Ramirez.</Text>

        <Text>
          I was born in Mexico, raised in Oregon and am currently living in the
          Bay Area.Education has always been very important to me as a first
          generation college graduate. After finishing my undergrad in Computer
          Science at Southern Oregon University, I went on to get my Masters at
          the University of Oregon where I started teaching web development
          sparking my interest in the field even more.
        </Text>

        <Text>
          I am highly adaptable and driven to learn and develop my existing
          skills. My free time I like to spend time with my wife and two kids. I
          enjoy traveling, preferably outside the country but love finding local
          places to visit too.
        </Text>
        <Text>
          I created this website to present my current React skills and examples
          of my code as I seek a job as a web developer. I would welcome the
          opportunity to bring my skills to real projects. Ideally I wish to
          become a valuable asset, and build ongoing relationships in this
          growing industry.
        </Text>

        <AnimatedLink
          variant={onHoverVariant}
          to="/files/Resume.pdf"
          target="_blank"
          download
        >
          <Adobe color="#FF0000" />
          &nbsp; My Resume (pdf)
        </AnimatedLink>
        <AnimatedLink
          variant={onHoverVariant}
          target="_blank"
          href="https://github.com/ramirezc1"
        >
          <Github />
          &nbsp; GitHub
        </AnimatedLink>
      </AboutContainer>
    </Container>
  );
};

export default About;
