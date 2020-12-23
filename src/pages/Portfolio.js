import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import styled from "styled-components";
import Project from "../components/Project";
import store from "../assets/images/store.png";
import robots from "../assets/images/robots.png";
import face from "../assets/images/face.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media only screen and (max-width: 600px) {
  }
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
    title: "Shipping Site",
    description: "E Commerce App",
    url: "https://crwn-live-lt.herokuapp.com/",
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
    title: "FaceDetection",
    description: "Full Stack App",
    url: "https://face-recognition-app2.herokuapp.com/",
    icons: { reactjs: true, html: true },
  },
  {
    image: robots,
    title: "RobotFriends",
    description: "PWA React App",
    url: "https://ramirezc1.github.io/RobotFriends/",
    icons: { reactjs: true, html: true, redux: true },
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
      <Project
        key={data[index].title}
        title={data[index].title}
        url={data[index].url}
        description={data[index].description}
        icons={data[index].icons}
        img={data[index].image}
      ></Project>
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
