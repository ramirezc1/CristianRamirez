import React from "react";
import AnimateBounce from "../components/AnimateBounce";
import {HeadingText, SubHeadingText, Text} from '../components/TextStyles'
import styled from "styled-components";

const Container = styled.div`
  margin-top: 8rem;
  margin: 0 auto;
  width: 90%;
`;

const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 90%;
    margin: auto;
  }
`;



const Contact = () => {
  return (
    <Container>
      {/* @TODO logo*/}
      <AnimateBounce y={100}>
        <HeadingText>Lorem ipsum dolor </HeadingText>
      </AnimateBounce>

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

        <a
          className="no-underline f5 dark-red"
          href="mailto:ramirezcristian81@live.com"
        >
          ramirezcristian81@live.com
        </a>

        <a
          className="no-underline f5 dark-red"
          href="https://www.linkedin.com/in/ramirezc1/"
        >
          <br />
          LinkedIn
        </a>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
