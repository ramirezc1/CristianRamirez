import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SubHeadingText } from './TextStyles';

export const ProjectContainer = styled(motion.div)`
  position: absolute;
  height: 70vh;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  z-index: 1;
  opacity: 0.7;
  /* background-image: ${(props) => `url(${props.img})`}; */
`;

export const Heading = styled.h1`
  color: white;
  margin: 0px;
  font-size: 2rem;
  font-weight: 600;
`;

export const SubHeading = styled(SubHeadingText)`
  font-size: 1rem;
  text-decoration: none;
  color: #e7040f;
  opacity: 1;
`;

export const StyledLink = styled(motion.a)`
  padding: 0.35rem;
  text-decoration: none;
  background-color: black;
  border-radius: 5px;
  color: #e7040f;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

export const LinkContainer = styled.div`
  width: 60%;
  font-size: 0.5rem;
  font-weight: 400;
  color: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    width: 60%;
  }
`;

const Image = styled.img`
  height: 150px;
  width: 220px;
  border-radius: 5px 20px 5px;
  margin-bottom: 20px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 1) 0px 0px 0px 10px;
  /* border-radius: 45%; */
  /* box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25); */
`;
export default Image;
