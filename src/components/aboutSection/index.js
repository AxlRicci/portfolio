import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import {AboutSectionContainer} from './aboutSectionElements';
import {HeadingContainer, HeadingSubtitle, HeadingTitle} from '../heading/headingElements';

import AboutGallery from '../aboutGallery';

const AboutSection = () => {
  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          aboutSubtitle
          aboutName
        }
      }
    `} render={({sanityContent: {aboutName, aboutSubtitle}}) => {
      return (
      <AboutSectionContainer id="about-section">
        <HeadingContainer>
          <HeadingTitle>{aboutName}</HeadingTitle>
          <HeadingSubtitle>{aboutSubtitle}</HeadingSubtitle>
        </HeadingContainer>
        <AboutGallery />
      </AboutSectionContainer>
    )}} />
  )
}

export default AboutSection
