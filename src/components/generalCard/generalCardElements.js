import styled from 'styled-components';
import Img from 'gatsby-image';

export const CardContainer = styled.div.attrs(props => ({
    ...props.attrs
  }))`
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  background-color: #fff;
  border: 1px solid #EBEBEB;
  border-radius: 10px;
  box-shadow: 2.5px 2.5px 7px 0 rgba(0,0,0, .1);
`



export const CardContent = styled.div`
  
`

export const CardHeading = styled.div`
  height: max-content;
  width: 100%;
  
  display: flex;
  flex-direction: column;
`

export const CardHeadingTitle = styled.h3`
  margin-bottom: .5rem;
  
  color: #000;
  
  font-size: 2rem;
  font-weight: 600;
`

export const CardHeadingSubtitle = styled.p`
  color: #A5A5A5;
  
  font-size: 1.6rem;
  font-weight: 600;
  white-space: pre-line;
`

export const CardBody = styled.p`
  margin-top: 2rem;
  
  color: #000;
  
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.7;
  white-space: pre-line;
`

export const CardGallery = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 4rem;
`

export const CardGalleryItemTooltip = styled.div`
  width: min-content;
  
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  
  transition: all .3s;
`

export const CardGalleryItemContainer = styled.div`
  height: max-content;
  width: max-content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover ${CardGalleryItemTooltip} {
    visibility: visible;
    opacity: 1;
  }
`

export const CardGalleryIcon = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`

export const CardGalleryItemImage = styled(Img)`
  width: 3.5rem;
  height: 3.5rem;
`