import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import styled from "styled-components";

import Project from "../components/Project";

const Container = styled.div`
  width: 90vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;
`;

const Button = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  background: black;
`;

const Prev = styled(Button)`
  left: 10px;
  transform: scale(-1);
`;

const Next = styled(Button)`
  right: 10px;
`;

const Image = styled(motion.img)`
  position: absolute;
  max-width: 100vw;
`;
const data = [
  {
    image: `${process.env.PUBLIC_URL}/images/store.png`,
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
    image: `${process.env.PUBLIC_URL}/images/face.png`,
    title: "FaceDetection",
    description: "Udemy Course Project",
    url: "https://face-recognition-app2.herokuapp.com/",
    icons: { reactjs: true, html: true },
  },
  {
    image: `${process.env.PUBLIC_URL}/images/robots.png`,
    title: "RobotFriends",
    description: "Udemy Course Project-",
    url: "https://ramirezc1.github.io/RobotFriends/",
    icons: { reactjs: true, html: true, redux: true },
  },
];

const variants = {
  enter: (direction) => {
    // console.log("enter" + direction);
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    // console.log("exit" + direction);
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Portfolio = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const index = wrap(0, data.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  // console.log(direction);

  return (
    <Container>
      <Next onClick={() => paginate(1)}>{"‣"}</Next>
      <Prev onClick={() => paginate(-1)}>{"‣"}</Prev>
      <Project
        key={data[index].title}
        title={data[index].title}
        url={data[index].url}
        description={data[index].description}
        icons={data[index].icons}
      ></Project>
      {/* <AnimatePresence initial={false} custom={direction}> */}
      <Image
        key={page}
        src={data[index].image}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          duration: 0.2,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      />
      {/* </AnimatePresence> */}
    </Container>
  );
};

export default Portfolio;
