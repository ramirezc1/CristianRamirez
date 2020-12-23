import React from "react";

import styled from "styled-components";
import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";
import HeightAnimation from "../components/HeightAnimation";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import withHoverAnimation from "../components/withAnimation";
import img from "./family.JPG";

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
      {/* @TODO logo*/}
      {/* @TODO img*/}
      <SubContainer>
        <HeightAnimation>
          <HeadingText>Lorem ipsum dolor sit amet </HeadingText>
        </HeightAnimation>
      </SubContainer>

      <Image src={img}></Image>
      <AboutContainer>
        <SubHeadingText>About</SubHeadingText>
        {/* @TODO edit*/}
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          maiores, autem voluptatibus hic animi dolores nobis ullam excepturi
          aliquid. Quibusdam assumenda nihil.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptas omnis iusto, esse, perspiciatis expedita amet nisi deserunt
          eaque, magnam non. Minima architecto atque iste non quia laudantium
          magni modi.
        </Text>

        <AnimatedLink
          variant={onHoverVariant}
          to="/files/Resume.pdf"
          target="_blank"
          download
        >
          My Resume (pdf)
        </AnimatedLink>
      </AboutContainer>
    </Container>
  );
};

export default About;
