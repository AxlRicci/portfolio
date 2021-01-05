import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {ProjectsSectionContainer} from './projectsSectionElements'
import {HeadingContainer, HeadingSubtitle, HeadingTitle} from '../heading/headingElements';

import ProjectGallery from '../projectGallery';

const ProjectsSection = () => {
  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          projectsSectionTitle
          projectsSectionSubtitle
        }
      }
    `} render={({sanityContent: {projectsSectionTitle, projectsSectionSubtitle}}) => (
      <ProjectsSectionContainer id="projects-section">
        <HeadingContainer>
          <HeadingTitle>
            {projectsSectionTitle}
          </HeadingTitle>
          <HeadingSubtitle>
            {projectsSectionSubtitle}
          </HeadingSubtitle>
        </HeadingContainer>
        <ProjectGallery />
      </ProjectsSectionContainer>
    )} />
  )
}

export default ProjectsSection
