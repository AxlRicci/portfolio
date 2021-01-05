import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { ProjectGalleryContainer} from './projectGalleryElements'; 

import ProjectGalleryItem from '../projectGalleryItem';

const ProjectGallery = () => {
  return (
    <StaticQuery query={graphql`
      {
        allSanityStudy(sort: {order: ASC, fields: position}) {
          nodes {
            description
            title
            tools
            cardImage {
              image {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
            links {
              title
              url
            }
          }
        }
      }
    `} render={({allSanityStudy: {nodes}}) => (
      <ProjectGalleryContainer>
        {
          nodes.map(project => (
            <ProjectGalleryItem key={project.name} project={project} />
          ))
        }
      </ProjectGalleryContainer>
    )} />
  )
}


export default ProjectGallery
