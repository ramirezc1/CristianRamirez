import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../assets/images/me.webp';

const BigImage = styled.div`
  background-size: cover;
  background-image: url(${img});
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 25%;
  @media only screen and (max-width: 600px) {
    left: -10%;
  }
`;

export default BigImage;

export const Container = styled(motion.div)`
  padding-top: 4rem;
  padding-left: 4rem;
  max-height: 100vh;
  @media only screen and (max-width: 600px) {
    padding-left: 1rem;
    height: 100vh;
  }
`;
