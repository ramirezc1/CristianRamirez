import React, { lazy, Suspense } from 'react';

import AnimatedSwitchLink from '../components/AnimatedSwitchLink';
import Logo from '../components/Logo';
import { Container } from './Home.styles';

const BigImage = lazy(() => import('./Home.styles'));

const Home = () => (
  <Container>
    <Logo />

    <AnimatedSwitchLink
      inputColor='#ffffff'
      fromText='Hello.'
      toText='About'
      toLink={`${process.env.PUBLIC_URL}/about`}
    />
    <AnimatedSwitchLink
      fromText='I am  '
      toText='Portfolio'
      toLink={`${process.env.PUBLIC_URL}/portfolio`}
    />
    <AnimatedSwitchLink
      fromText='Cristian'
      toText='Contact'
      toLink={`${process.env.PUBLIC_URL}/contact`}
    />

    <Suspense fallback={<p>&nbsp;</p>}>
      <BigImage />
    </Suspense>
  </Container>
);

export default Home;
