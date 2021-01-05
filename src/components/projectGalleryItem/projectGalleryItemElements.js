import styled from 'styled-components';
import Img from 'gatsby-image';


export const GalleryCardContainer = styled.div.attrs(props => ({
    ...props.attrs
  }))`
    height: max-content;
    width: 100%;
    padding: 3rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 1rem;
    box-shadow: .25rem .25rem .7rem 0 rgba(0,0,0, .1);

    text-align: center;

    @media only screen and (min-width: 64em) {
      flex-direction: row;
      align-items: center;
      gap: 6rem;
      
      text-align: left;
    }
  `

export const CardTitle = styled.h4`
  font-size: 2.5rem;
  font-weight: 600;
`

export const CardImageContainer = styled.div`
  height: min-content;
  width: 100%;
`

export const CardImage = styled(Img)`
  height: auto;
  width: 100%;
`

export const CardDescriptionContainer = styled.div`
  height: min-content;
  width: 100%;
`

export const TechList = styled.ul`
  margin-top: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  list-style: none;

  @media only screen and (min-width: 64em) {
    justify-content: flex-start;
  }
`

export const TechListItem = styled.li`
  padding: .5rem 1rem;
  
  font-size: 1.2rem;
  color: #fff;

  background-color: #0071E3;
  border-radius: 2rem;
`

export const ProjectDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
`

export const CardActions = styled.div`
  height: max-content;
  width: 100%;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 64em) {
    flex-direction: row;
    gap: 5rem;
  }
`
