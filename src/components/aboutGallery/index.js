import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { AboutGalleryContainer } from './aboutGalleryElements';

import GeneralCard from '../generalCard';

import { CardHeadingTitle, CardHeadingSubtitle, CardHeading, CardBody, CardGallery, CardGalleryItemContainer, CardGalleryIcon, CardGalleryItemTooltip} from '../generalCard/generalCardElements';


const AboutGrid = () => {

  return (
    <StaticQuery query={graphql`
      {
        allSanityTech {
          nodes {
            name
            svg {
              image {
                asset {
                  url
                }
              }
            }
          }
        }
        sanityContent {
          aboutCardStoryTitle
          aboutCardStorySubtitle
          aboutCardStoryStory
        }
      }
    `} render={({allSanityTech: {nodes}, sanityContent: {aboutCardStoryStory, aboutCardStoryTitle, aboutCardStorySubtitle}}) => (
      <AboutGalleryContainer>
        <GeneralCard 
          attrs={{ 
            "data-sal": 'fade',
            "data-sal": 'slide-right',
            "data-sal-duration": '1000'
          }}
        >
          <CardHeading>
            <CardHeadingTitle>
              {aboutCardStoryTitle}
            </CardHeadingTitle>
            <CardHeadingSubtitle>
              {aboutCardStorySubtitle}
            </CardHeadingSubtitle>
          </CardHeading>
          <CardBody>
            {aboutCardStoryStory}
          </CardBody>
        </GeneralCard>
        <GeneralCard 
          attrs={{ 
            "data-sal": 'fade',
            "data-sal": 'slide-left',
            "data-sal-duration": '1000'
          }}
        >
          <CardHeading>
            <CardHeadingTitle>
              What I know.
            </CardHeadingTitle>
            <CardHeadingSubtitle>
              Here are some of the technologies I work with.
            </CardHeadingSubtitle>
          </CardHeading>
          <CardGallery>
            {
              nodes.map(tech => (
                <CardGalleryItemContainer key={tech.name}>
                  <CardGalleryIcon src={tech.svg.image.asset.url}>
                  </CardGalleryIcon>
                  <CardGalleryItemTooltip >
                    {tech.name}
                  </CardGalleryItemTooltip>
                </CardGalleryItemContainer>
              ))
            }
          </CardGallery>
        </GeneralCard>
      </AboutGalleryContainer>
    )} />
  )
}

export default AboutGrid
