import React from "react";

import styled from "styled-components";
import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";
import HeightAnimation from "../components/HeightAnimation";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import withHoverAnimation from "../components/withAnimation";

// const LinkWithAnimation = withAnimation(Link);
const Container = styled.div`
  margin: 0 auto;
  max-width: 21.5em;
`;

const SubContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 5rem;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 90%;
    margin: auto;
    padding-bottom: 5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e7040f;
  font-size: 0.75rem;
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

      <ImageContainer>
        <img alt="" className="twic" data-src="placeholder:auto"></img>
      </ImageContainer>
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
