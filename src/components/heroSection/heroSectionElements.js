import styled from 'styled-components';
import Image from '../Image';

export const HeroSectionContainer = styled.header`
  height: 100vh;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeroSectionContent = styled.div`
  height: max-content;
  width: 100%;
  max-width: 60rem;
  margin-top: 3rem;
  padding: 0 2rem;
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;
  
  transform: translate(-50%, -60%);
`

export const HeroSectionName = styled.h1`
  margin-bottom: 2rem;
  
  font-size: 2.5rem;
  font-weight: 600;
`

export const HeroSectionTitle = styled.h2.attrs(props =>({
  "data-sal": "fade",
  "data-sal": "slide-up",
  "data-sal-duration": '700',
  "data-sal-easing": 'ease-in-sine'
}))`
  margin-bottom: 2rem;
  
  font-size: 6.4rem;
  font-weight: 600;
`

export const HeroSectionSubtitle = styled.p.attrs(props =>({
  "data-sal": "fade",
  "data-sal": "slide-up",
  "data-sal-duration": '700',
  "data-sal-delay": '200',
  "data-sal-easing": 'ease-in-sine',
}))`
  margin-bottom: 4rem;
  
  font-size: 2.5rem;
  line-height: 1.5;
`

export const HeroSectionImage = styled(Image)`
  height: auto;
  width: 100%;
  max-width: 35rem;
  margin-bottom: 3rem;
  
  border-radius: 1rem;
  box-shadow: .5rem .5rem 1rem 0 rgba(0,0,0, .1);
  filter: greyscale(100%);
`