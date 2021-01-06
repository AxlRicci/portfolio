import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CustomButton from '../customButton/index';

import { HeroSectionContainer, HeroSectionContent, HeroSectionImage, HeroSectionSubtitle, HeroSectionTitle, HeroSectionSocialBar, HeroSectionSocialLink, GithubIcon, LinkedinIcon} from './heroSectionElements';

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
          <HeroSectionSocialBar>
            <HeroSectionSocialLink target="_blank" rel="noopener noreferrer" href="https://github.com/AxlRicci">
              <GithubIcon />
            </HeroSectionSocialLink>
            <HeroSectionSocialLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-ricci-b347b619b">
              <LinkedinIcon />
            </HeroSectionSocialLink>
          </HeroSectionSocialBar>
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
            to="/#projects-section"
            label="Projects"
            big="true"
          />
        </HeroSectionContent>
      </HeroSectionContainer>
    )}} />
  )
}

export default HeroSection

