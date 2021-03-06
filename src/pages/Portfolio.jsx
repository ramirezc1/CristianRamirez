import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { wrap } from 'popmotion';
import styled from 'styled-components';
import Project from '../components/Project';
import store from '../assets/images/store.webp';
import robots from '../assets/images/robots.webp';
import face from '../assets/images/face.webp';
import Logo from '../components/Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
  }
`;

const CenteredLogo = styled(Logo)`
  top: 50px;
  left: 80vw;
`;

const Button = styled(motion.div)`
  top: calc(50% - 20px);
  position: absolute;
  border-radius: 30px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 3;
  font-size: 70px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const Prev = styled(Button)`
  left: 20px;
`;

const Next = styled(Button)`
  right: 20px;
`;

const data = [
  {
    image: store,
    title: 'CRWN Clothing',
    description: 'E Commerce App',
    url: 'https://crwn-live-lt.herokuapp.com/',
    projectUrl: 'https://github.com/ramirezc1/clothing-store',
    icons: {
      reactjs: true,
      html: true,
      styledComponents: true,
      redux: true,
      reactRouter: true,
    },
  },
  {
    image: face,
    title: 'Face Detection',
    description: 'Full Stack App',
    url: 'https://face-recognition-app2.herokuapp.com/',
    projectUrl: 'https://github.com/ramirezc1/faceRecognition',
    icons: { reactjs: true, html: true, redis: true, psql: true, docker: true },
  },
  {
    image: robots,
    title: 'Robot Friends',
    description: 'PWA React App',
    url: 'https://ramirezc1.github.io/RobotFriends/',
    projectUrl: 'https://github.com/ramirezc1/RobotFriends',
    icons: {
      reactjs: true,
      html: true,
      redux: true,
      typeScript: true,
      jest: true,
    },
  },
];

const Portfolio = () => {
  const [page, setPage] = useState(0);

  const index = wrap(0, data.length, page);

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  return (
    <Container>
      <CenteredLogo />
      <Project
        key={data[index].title}
        title={data[index].title}
        url={data[index].url}
        projectUrl={data[index].projectUrl}
        description={data[index].description}
        icons={data[index].icons}
        img={data[index].image}
      />
      <Next whileHover={{ scale: 1.2 }} onClick={() => paginate(1)}>
        &#10095;
      </Next>
      <Prev whileHover={{ scale: 1.2 }} onClick={() => paginate(-1)}>
        &#10094;
      </Prev>
    </Container>
  );
};

export default Portfolio;
