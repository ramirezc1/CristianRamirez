import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';
import {
  Heading,
  LinkContainer,
  ProjectContainer,
  StyledLink,
  SubHeading,
} from './Project.styles';
import LoadingSpinner from './LoadingSpinner';

const Image = lazy(() => import('./Project.styles'));

const Project = ({ title, description, icons, url, projectUrl, img }) => (
  <ProjectContainer
    initial={{ opacity: 0 }}
    animate={{ scale: 1.3, opacity: 1 }}
    transition={{
      scale: { duration: 0.3 },
    }}
  >
    <Heading>{title}</Heading>
    <SubHeading>{description}</SubHeading>
    <Suspense fallback={<LoadingSpinner />}>
      <Image alt='project screenshot' src={img} />
    </Suspense>
    <LinkContainer>
      <StyledLink whileHover={{ scale: 1.1 }} target='_blank' href={url}>
        Live Demo
      </StyledLink>
      <StyledLink whileHover={{ scale: 1.1 }} target='_blank' href={projectUrl}>
        GitHub
      </StyledLink>
    </LinkContainer>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Icons {...icons} />
  </ProjectContainer>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icons: PropTypes.objectOf(PropTypes.bool).isRequired,
  url: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Project;
