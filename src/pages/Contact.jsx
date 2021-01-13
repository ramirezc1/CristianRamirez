import React from 'react';
import { Linkedin, Gmail } from '@icons-pack/react-simple-icons';
import { HeadingText, SubHeadingText, Text } from '../components/TextStyles';
import HeightAnimation from '../components/HeightAnimation';
import withHoverAnimation from '../components/withAnimation';
import Logo from '../components/Logo';
import {
  ContactContainer,
  Container,
  StyledLink,
  SubContainer,
  onHoverVariant,
} from './Contact.styles';

const AnimatedLink = withHoverAnimation(StyledLink);

const Contact = () => (
  <Container>
    <Logo />
    <SubContainer>
      <HeightAnimation>
        <HeadingText>Let’s Connect</HeadingText>
      </HeightAnimation>
    </SubContainer>

    <ContactContainer>
      <SubHeadingText>Contact</SubHeadingText>
      <Text>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Please don't hesitate to reach out if you have any questions. I look
        forward to connecting and gaining new experiences.
      </Text>

      {/* TODO- add icons  */}
      <AnimatedLink
        variant={onHoverVariant}
        href='mailto:ramirezcristian81@live.com'
      >
        <Gmail color='#D14836' />
        &nbsp; ramirezcristian81@live.com
      </AnimatedLink>

      <AnimatedLink
        variant={onHoverVariant}
        target='_blank'
        href='https://www.linkedin.com/in/ramirezc1/'
      >
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <Linkedin color='#0077B5' /> &nbsp; LinkedIn
      </AnimatedLink>
    </ContactContainer>
  </Container>
);

export default Contact;
