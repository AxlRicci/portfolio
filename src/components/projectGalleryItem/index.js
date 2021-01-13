import React from 'react'


import {
  CardTitle,
  GalleryCardContainer,
  CardImageContainer,
  CardImage,
  CardDescriptionContainer,
  TechList,
  TechListItem,
  ProjectDescription,
  CardActions
} from './projectGalleryItemElements';

import CustomButton from '../customButton'

const ProjectGalleryItem = ({project, attrs}) => {
  const {
    title, 
    description, 
    tools, 
    links, 
    cardImage: {image: {asset: { fluid }}} 
  } = project;

  return (
    <GalleryCardContainer attrs={attrs}>
      <CardImageContainer>
        <CardImage fluid={fluid} />
      </CardImageContainer>
      <CardDescriptionContainer>
        <CardTitle>
          {title}
        </CardTitle>
        <TechList>
          {
            tools.map(tool => (
              <TechListItem key={tool}>{tool}</TechListItem>
            ))
          }
        </TechList>
        <ProjectDescription>
          {description}
        </ProjectDescription>
        <CardActions>
          {
            links.map(({title, url}) => (
              <CustomButton key={title} label={title} to={url} external />
            ))
          }
        </CardActions>
      </CardDescriptionContainer>
    </GalleryCardContainer>
  ) 
}

export default ProjectGalleryItem
