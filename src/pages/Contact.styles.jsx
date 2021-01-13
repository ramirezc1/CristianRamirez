import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  width: 100vw;
  margin: 0 auto;
  max-width: 95%;
  overflow-y: hidden;
  @media only screen and (max-width: 600px) {
    margin: auto;
    max-width: 80%;
  }
`;

export const ContactContainer = styled.section`
  margin: 0 auto;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 95%;
    margin: auto;
  }
`;

export const SubContainer = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 70%;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
    margin: auto;
    padding-top: 2rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const onHoverVariant = {
  hover: {
    x: 20,
  },
};
