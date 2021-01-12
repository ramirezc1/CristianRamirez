import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Reactrouter,
  ReactJs,
  Redux,
  Css3,
  Html5,
  StyledComponents,
  Jest,
  Typescript,
  Redis,
  Postgresql,
  Docker,
} from '@icons-pack/react-simple-icons';

import withTooltip from './withTooltip';

const Container = styled.section`
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
}) => (
  <Container>
    {reactjs && (
      <TooltipReact title='ReactJs' size='1.1rem' hovercolor='#61DAFB' />
    )}
    {html && <TooltipHtml title='HTML5' size='1.1rem' hovercolor='#E34F26' />}
    {css && <TooltipCss title='CSS3' size='1.1rem' hovercolor='#1572B6' />}
    {styledComponents && (
      <TooltipStyledComponent
        title='StyledComponets'
        size='1.1rem'
        hovercolor='#DB7093'
      />
    )}
    {redux && (
      <TooltipRedux
        title='Redux'
        size='1.1rem'
        hovercolor='rgb(118, 74, 188)'
      />
    )}
    {reactRouter && (
      <TooltipReactRouter
        title='TypeScript'
        size='1.1rem'
        hovercolor='#CA4245'
      />
    )}
    {jest && <TooltipJest title='Jest' size='1.1rem' hovercolor='#CA4245' />}
    {typeScript && (
      <TooltipTypeScript
        size='1.1rem'
        title='TypeScript'
        hovercolor='#3178C6'
      />
    )}
    {redis && <TooltipRedis title='Redis' size='1.1rem' hovercolor='#CA4245' />}
    {psql && (
      <TooltipPSQL title='PostgresSQL' size='1.1rem' hovercolor='#336791' />
    )}
    {docker && (
      <TooltipDocker title='Docker' size='1.1rem' hovercolor='#2496ED' />
    )}
  </Container>
);
Icons.defaultProps = {
  reactjs: false,
  html: false,
  css: false,
  styledComponents: false,
  reactRouter: false,
  redux: false,
  jest: false,
  typeScript: false,
  redis: false,
  psql: false,
  docker: false,
};
Icons.propTypes = {
  reactjs: PropTypes.bool,
  html: PropTypes.bool,
  css: PropTypes.bool,
  styledComponents: PropTypes.bool,
  reactRouter: PropTypes.bool,
  redux: PropTypes.bool,
  jest: PropTypes.bool,
  typeScript: PropTypes.bool,
  redis: PropTypes.bool,
  psql: PropTypes.bool,
  docker: PropTypes.bool,
};

export default Icons;
