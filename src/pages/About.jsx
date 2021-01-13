import React, { lazy, Suspense } from 'react';
import { Adobe, Github } from '@icons-pack/react-simple-icons';
import { HeadingText, SubHeadingText, Text } from '../components/TextStyles';
import HeightAnimation from '../components/HeightAnimation';
import {
  AboutContainer,
  AnimatedLink,
  Container,
  onHoverVariant,
  SubContainer,
} from './About.styles';

import img from './family.webp';
import Logo from '../components/Logo';
import LoadingSpinner from '../components/LoadingSpinner';

const Image = lazy(() => import('./About.styles'));

const About = () => (
  <Container>
    <Logo />

    <SubContainer>
      <HeightAnimation>
        <HeadingText>Hello and Welcome to my website.</HeadingText>
      </HeightAnimation>
    </SubContainer>

    <Suspense fallback={<LoadingSpinner />}>
      <Image alt='family image' src={img} />
    </Suspense>

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
        become a valuable asset, and build ongoing relationships in this growing
        industry.
      </Text>

      <AnimatedLink
        variant={onHoverVariant}
        to={`${process.env.PUBLIC_URL}/files/CristianRamirezResume.pdf`}
        target='_blank'
        download
      >
        <Adobe color='#FF0000' />
        &nbsp; My Resume (pdf)
      </AnimatedLink>
      <AnimatedLink
        variant={onHoverVariant}
        target='_blank'
        to=''
        href='https://github.com/ramirezc1'
      >
        <Github />
        &nbsp; GitHub
      </AnimatedLink>
    </AboutContainer>
  </Container>
);

export default About;
