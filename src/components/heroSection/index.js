import React, { useEffect, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {gsap} from 'gsap'

import CustomButton from '../customButton/index';

import {
  GithubIcon,
  HeroSectionContainer,
  HeroSectionContent,
  HeroSectionImage,
  HeroSectionSocialBar,
  HeroSectionSocialLink,
  HeroSectionSubtitleCardContainer,
  HeroSectionSubtitleContainer,
  HeroSectionSubtitleEmoji,
  HeroSectionSubtitleWord,
  HeroSectionTitle,
  LinkedinIcon,
} from './heroSectionElements';

const HeroSection = () => {
  const ref = useRef(null)
  const refs = {};
  
  useEffect(() => {
    const el = ref.current;
    const elNodeList = el.querySelectorAll('.subtitle-card');
    elNodeList.forEach(projectNode => {
      const currentNodeType = projectNode.id.split('')[0]
      if (!refs.hasOwnProperty(currentNodeType)) {
        refs[currentNodeType] = [projectNode.id]
      } else {
        refs[currentNodeType] = [...refs[currentNodeType], projectNode.id]
      }
    })

    const tlOne = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true});
    const tlTwo = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true});
    
    refs.e.forEach(el => {
      tlTwo.fromTo(`#${el}`, {
        yPercent: 0,
        opacity: 1
      }, {
        yPercent: -100,
        opacity: 0,
        duration: .5
      })
    })

    refs.w.forEach(el => {
      tlOne.fromTo(`#${el}`, {
        yPercent: 0,
        opacity: 0
      }, {
        yPercent: -100,
        opacity: 1,
        duration: .5
      })
    })

    tlOne.delay(2).play()
    tlTwo.delay(2).play()
    
    gsap.fromTo(".gsap-fadeup", {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0, duration: 1.5})
    gsap.fromTo(".gsap-fadeLeft", {opacity: 0, xPercent: 25}, {opacity: 1, xPercent: 0, duration: 1.5})
    gsap.fromTo(".gsap-fadeRight", {opacity: 0, xPercent: -25}, {opacity: 1, xPercent: 0, duration: 1.5})
  },[])

  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          heroName
          heroSubtitle
          heroSubtitleEmojis
        }
      }
    `} render={({sanityContent: {heroName, heroSubtitle, heroSubtitleEmojis}}) => {
      return (
      <HeroSectionContainer>
        <HeroSectionContent>
        <HeroSectionImage src="profile.jpg" />
          <HeroSectionSocialBar className="gsap-fadeup">
            <HeroSectionSocialLink target="_blank" rel="noopener noreferrer" href="https://github.com/AxlRicci">
              <GithubIcon />
            </HeroSectionSocialLink>
            <HeroSectionSocialLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-ricci-b347b619b">
              <LinkedinIcon />
            </HeroSectionSocialLink>
          </HeroSectionSocialBar>
          <HeroSectionTitle className="gsap-fadeLeft">
            {heroName}
          </HeroSectionTitle>
          <HeroSectionSubtitleContainer className="gsap-fadeRight" ref={ref}>
            {
              heroSubtitle.split(' ').map((word, index) => (
                <HeroSectionSubtitleCardContainer key={word}>
                  <HeroSectionSubtitleEmoji key={`e-${index}`} id={`e-${index}`} className="subtitle-card">
                    {heroSubtitleEmojis.split(' ')[index]}
                  </HeroSectionSubtitleEmoji>
                  <HeroSectionSubtitleWord key={`w-${index}`} id={`w-${index}`} className="subtitle-card">
                    {word}
                  </HeroSectionSubtitleWord>
                </HeroSectionSubtitleCardContainer>
              ))
            }
          </HeroSectionSubtitleContainer>
          <CustomButton
            attrs="gsap-fadeup"
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

