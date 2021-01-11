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
import { Redis } from "@icons-pack/react-simple-icons";
import { Postgresql } from "@icons-pack/react-simple-icons";
import { Docker } from "@icons-pack/react-simple-icons";
import withTooltip from "./withTooltip";

const Container = styled(motion.div)`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  color: white;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const TooltipReact = withTooltip(ReactJs);
const TooltipDocker = withTooltip(Docker);
const TooltipRedis = withTooltip(Redis);
const TooltipPSQL = withTooltip(Postgresql);
const TooltipHtml = withTooltip(Html5);
const TooltipCss = withTooltip(Css3);
const TooltipStyledComponent = withTooltip(StyledComponents);
const TooltipRedux = withTooltip(Redux);
const TooltipReactRouter = withTooltip(Reactrouter);
const TooltipTypeScript = withTooltip(Typescript);
const TooltipJest = withTooltip(Jest);

const Icons = ({
  reactjs,
  html,
  css,
  styledComponents,
  reactRouter,
  redux,
  jest,
  typeScript,
  redis,
  psql,
  docker,
  variant,
}) => (
  <Container variants={variant} whileHover="hover" initial="initial">
    {reactjs && (
      <TooltipReact title="ReactJs" size={"1.1rem"} hovercolor={"#61DAFB"} />
    )}
    {html && <TooltipHtml title="HTML5" size={"1.1rem"} hovercolor="#E34F26" />}
    {css && <TooltipCss title="CSS3" size={"1.1rem"} hovercolor="#1572B6" />}
    {styledComponents && (
      <TooltipStyledComponent
        title="StyledComponets"
        size={"1.1rem"}
        hovercolor="#DB7093"
      />
    )}
    {redux && (
      <TooltipRedux
        title="Redux"
        size={"1.1rem"}
        hovercolor="rgb(118, 74, 188)"
      />
    )}
    {reactRouter && (
      <TooltipReactRouter
        title="TypeScript"
        size={"1.1rem"}
        hovercolor="#CA4245"
      />
    )}
    {jest && <TooltipJest title="Jest" size={"1.1rem"} hovercolor="#CA4245" />}
    {typeScript && (
      <TooltipTypeScript
        size={"1.1rem"}
        title="TypeScript"
        hovercolor="#3178C6"
      />
    )}
    {redis && (
      <TooltipRedis title="Redis" size={"1.1rem"} hovercolor="#CA4245" />
    )}
    {psql && (
      <TooltipPSQL title="PostgresSQL" size={"1.1rem"} hovercolor="#336791" />
    )}
    {docker && (
      <TooltipDocker title="Docker" size={"1.1rem"} hovercolor="#2496ED" />
    )}
  </Container>
);

export default Icons;
