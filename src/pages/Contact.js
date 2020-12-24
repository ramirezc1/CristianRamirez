import React from "react";

import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";
import styled from "styled-components";
import HeightAnimation from "../components/HeightAnimation";
import withHoverAnimation from "../components/withAnimation";
import Logo from "../components/Logo";

const Container = styled.div`
  margin-top: 5rem;
  width: 100vw;
  margin: 0 auto;
  max-width: 95%;
  overflow-y: hidden;
  @media only screen and (max-width: 600px) {
    margin: auto;
    max-width: 80%;
  }
`;

const ContactContainer = styled.section`
  margin: 0 auto;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 95%;
    margin: auto;
  }
`;

const SubContainer = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    margin: auto;
    padding-top: 2rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.95rem;
  font-weight: 700;
`;

const AnimatedLink = withHoverAnimation(StyledLink);

const onHoverVariant = {
  hover: {
    x: 20,
  },
};

const Contact = () => {
  return (
    <Container>
      <Logo></Logo>
      <SubContainer>
        <HeightAnimation>
          <HeadingText>Let’s Connect</HeadingText>
        </HeightAnimation>
      </SubContainer>

      <ContactContainer>
        <SubHeadingText>Contact</SubHeadingText>
        <Text>
          Please don't hesitate to reach out if you have any questions. I look
          forward to connecting and gaining new experiences.  
        </Text>

        {/* TODO- add icons  */}
        <AnimatedLink
          variant={onHoverVariant}
          href="mailto:ramirezcristian81@live.com"
        >
          ramirezcristian81@live.com
        </AnimatedLink>

        <AnimatedLink
          variant={onHoverVariant}
          target="_blank"
          href="https://www.linkedin.com/in/ramirezc1/"
        >
          LinkedIn
        </AnimatedLink>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
