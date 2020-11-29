import React from "react";

import { HeadingText, SubHeadingText, Text } from "../components/TextStyles";
import styled from "styled-components";
import HeightAnimation from "../components/HeightAnimation";
import withHoverAnimation from "../components/withAnimation";

const Container = styled.div`
  margin-top: 8rem;
  margin: 0 auto;
  max-width: 21.5em;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 70%;
  padding-bottom: 5rem;
  @media only screen and (max-width: 600px) {
    max-width: 90%;
    margin: auto;
    padding-bottom: 5rem;
  }
`;

const SubContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

const StyledLink = styled.a`
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

const Contact = () => {
  return (
    <Container>
      {/* @TODO logo*/}
      <SubContainer>
        <HeightAnimation>
          <HeadingText>Lorem ipsum dolor sit amet </HeadingText>
        </HeightAnimation>
      </SubContainer>

      <ContactContainer>
        <SubHeadingText>Contact</SubHeadingText>
        {/* @TODO edit*/}
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt
          rerum in ab. Atque, nobis hic cum ad harum repellendus odio illum
          ullam facere quam qui quis dolores eveniet impedit?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          commodi officia magnam. Hic ex, rerum eligendi, quae aperiam fugiat
          commodi beatae cum dolorem eveniet voluptatum. Ad sint mollitia odit
          ratione?
        </Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing</Text>

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
