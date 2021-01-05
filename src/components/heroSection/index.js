import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CustomButton from '../customButton/index';

import { HeroSectionContainer, HeroSectionContent, HeroSectionImage, HeroSectionSubtitle, HeroSectionTitle} from './heroSectionElements';

const HeroSection = () => {
  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          heroName
          heroSubtitle
        }
      }
    `} render={({sanityContent: {heroName, heroSubtitle}}) => {
      return (
      <HeroSectionContainer>
        <HeroSectionContent>
        <HeroSectionImage src="profile.jpg" />
          <HeroSectionTitle>
            {heroName}
          </HeroSectionTitle>
          <HeroSectionSubtitle>
            {heroSubtitle}
          </HeroSectionSubtitle>
          <CustomButton
            attrs={{
              "data-sal": 'fade',
              "data-sal": 'slide-up',
              "data-sal-duration": "700",
              "data-sal-delay": '700'
              }}
            to="#"
            label="Check out my projects"
            big="true"
          />
        </HeroSectionContent>
      </HeroSectionContainer>
    )}} />
  )
}

export default HeroSection

