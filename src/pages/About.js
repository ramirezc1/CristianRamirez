import React from "react";
import { Link } from "react-router-dom";
import AnimateBounce from "../components/AnimateBounce";
import AnimatedLink from "../components/AnimatedLink";
import styled from "styled-components";
import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";

const Container = styled.div`
  margin-top: 8rem;
  margin: 0 auto;
  width: 90%;
`;

const imageContainer = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const About = () => {
  return (
    <Container>
      {/* @TODO logo*/}
      {/* @TODO img*/}
      <AnimateBounce y={100}>
        <HeadingText>Lorem ipsum dolor sit amet </HeadingText>
      </AnimateBounce>

      <imageContainer>
        <img alt="" className="twic" data-src="placeholder:auto"></img>
      </imageContainer>
      <div className="center flex-column pb3 container">
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
        <AnimatedLink>
          <Link
            to="/files/Resume.pdf"
            className="dark-red self-start f5 no-underline mb3 f-5 lh-solid"
            target="_blank"
            download
          >
            My Resume (pdf)
          </Link>
        </AnimatedLink>
      </div>
    </Container>
  );
};

export default About;
