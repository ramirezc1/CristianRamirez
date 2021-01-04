import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Reactrouter } from "@icons-pack/react-simple-icons";
import { ReactJs } from "@icons-pack/react-simple-icons";
import { Redux } from "@icons-pack/react-simple-icons";
import { Css3 } from "@icons-pack/react-simple-icons";
import { Html5 } from "@icons-pack/react-simple-icons";
import { StyledComponents } from "@icons-pack/react-simple-icons";
import { Jest } from "@icons-pack/react-simple-icons";
import { Typescript } from "@icons-pack/react-simple-icons";

const Container = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  color: black;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const StyledReact = styled(ReactJs)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledHtml = styled(Html5)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledCss = styled(Css3)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledComponent = styled(StyledComponents)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledRedux = styled(Redux)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;
const StyledReactRouter = styled(Reactrouter)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledJest = styled(Jest)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledTypeScript = styled(Typescript)`
  :hover {
    fill: ${(props) => props.hovercolor};
  }
`;

const Icons = ({
  reactjs,
  html,
  css,
  styledComponents,
  reactRouter,
  redux,
  jest,
  typeScript,
  variant,
}) => (
  <Container variants={variant} whileHover="hover" initial="initial">
    {reactjs && <StyledReact size={"1.1rem"} hovercolor={"#61DAFB"} />}
    {html && <StyledHtml size={"1.1rem"} hovercolor="#E34F26" />}
    {css && <StyledCss size={"1.1rem"} hovercolor="#1572B6" />}
    {styledComponents && (
      <StyledComponent size={"1.1rem"} hovercolor="#DB7093" />
    )}
    {redux && <StyledRedux size={"1.1rem"} hovercolor="rgb(118, 74, 188)" />}
    {reactRouter && <StyledReactRouter size={"1.1rem"} hovercolor="#CA4245" />}
    {jest && <StyledJest size={"1.1rem"} hovercolor="#CA4245" />}
    {typeScript && <StyledTypeScript size={"1.1rem"} hovercolor="#3178C6" />}
  </Container>
);

export default Icons;
