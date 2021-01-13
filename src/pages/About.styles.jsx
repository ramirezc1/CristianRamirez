import styled from 'styled-components';
import { Link } from 'react-router-dom';
import withHoverAnimation from '../components/withAnimation';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 86%;
`;

export const SubContainer = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    margin: auto;
    padding-top: 1rem;
  }
`;

export const AboutContainer = styled.section`
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 5rem;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    margin: auto;
    max-width: 100%;
    padding-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const AnimatedLink = withHoverAnimation(StyledLink);

export const onHoverVariant = {
  hover: {
    x: 20,
  },
};

const Image = styled.img`
  max-width: 100%;
  border-radius: 5px 20px 5px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export default Image;
