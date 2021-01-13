import React, { useEffect, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { AboutGalleryContainer } from './aboutGalleryElements';

import GeneralCard from '../generalCard';

import { CardHeadingTitle, CardHeadingSubtitle, CardHeading, CardBody, CardGallery, CardGalleryItemContainer, CardGalleryIcon, CardGalleryItemTooltip} from '../generalCard/generalCardElements';


const AboutGrid = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el.querySelector("#about-1"),
      {xPercent: -100, opacity: 0},
      {opacity: 1, xPercent: 0, duration: 1, scrollTrigger: {
        trigger: el.querySelector("#about-1"),
        start: "top bottom",
      }}
    )
    gsap.fromTo(
      el.querySelector("#about-2"),
      {xPercent: 100, opacity: 0},
      {opacity: 1, xPercent: 0, duration: 1, scrollTrigger: {
        trigger: el.querySelector("#about-2"),
        start: "top bottom",
      }}
    )

  }, [])

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
      <AboutGalleryContainer ref={ref}>
        <GeneralCard attrs={{"id": "about-1"}}>
          <CardHeading id="about-heading">
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
          attrs={{"id": "about-2"}}
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
