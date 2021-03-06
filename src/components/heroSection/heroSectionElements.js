import styled from 'styled-components';
import { SiLinkedin, SiGithub } from "react-icons/si";
import Image from '../Image';

export const HeroSectionContainer = styled.header`
  height: calc(100vh - 5rem);
  width: 100%;
  padding: 1rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const HeroSectionContent = styled.div`
  height: max-content;
  width: 100%;
  max-width: 60rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;
`

export const HeroSectionName = styled.h1`
  margin-bottom: 2rem;
  
  font-size: 2.5rem;
  font-weight: 600;
`

export const HeroSectionTitle = styled.h1`
  margin-bottom: 1rem;
  
  font-size: 5rem;
  font-weight: 600;

  @media only screen and (min-width: 28em) {
    margin-bottom: 2rem;
  
    font-size: 6.4rem;
    font-weight: 600;
  }
`

export const HeroSectionSubtitle = styled.p`
  margin-bottom: 2rem;
  
  font-size: 1.8rem;
  line-height: 1.5;

  @media only screen and (min-width: 28em) {
    margin-bottom: 4rem;
  
    font-size: 2.2rem;
    line-height: 1.5;
  }
`

export const HeroSectionSubtitleContainer = styled.div`
  height: max-content;
  width: 100%;
  margin-bottom: 4rem;

  display: flex;
  justify-content: center;
  gap: 1rem;
  
  font-size: 1.8rem;
  line-height: 1.5;

  @media only screen and (min-width: 28em) {
    font-size: 2.2rem;
    line-height: 1.5;
  }
`


export const HeroSectionSubtitleWord = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export const HeroSectionSubtitleEmoji = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-size: 2.5rem;

  @media only screen and (min-width: 28em) {
    font-size: 2.5rem;
  }
`

export const HeroSectionSubtitleCardContainer = styled.div`
  height: 3.5rem;
  width: max-content;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  line-height: 1.5;
`

export const HeroSectionImage = styled(Image)`
  height: auto;
  width: 60%;
  max-width: 35rem;
  margin-bottom: 2rem;
  
  border-radius: 1rem;
  box-shadow: .5rem .5rem 1rem 0 rgba(0,0,0, .1);
  filter: greyscale(100%);

  @media only screen and (min-width: 28em) {
    height: auto;
    width: 100%;
    max-width: 35rem;
    margin-bottom: 3rem;
  }
`

export const HeroSectionSocialBar = styled.div`
  width: 100%;
  height: max-content;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const HeroSectionSocialLink = styled.a`
  height: max-content;
  width: max-content;
  transition: all .2s;

  &:hover {
    transform: translateY(-2px);
  }
`

export const GithubIcon = styled(SiGithub)`
  height: auto;
  width: 2.5rem;

  fill: #000;
  cursor: pointer;
`
export const LinkedinIcon = styled(SiLinkedin)`
  height: auto;
  width: 2.5rem;

  fill: #000;
  cursor: pointer;
`

// 1F441 1F497 1F449 1F6A7 2744 1F4A9

// I Love to build cool shit