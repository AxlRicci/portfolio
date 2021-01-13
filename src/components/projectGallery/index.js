import React, { useEffect, useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ProjectGalleryContainer} from './projectGalleryElements'; 

import ProjectGalleryItem from '../projectGalleryItem';

const ProjectGallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null)
  const refArray = [];

  useEffect(() => {
    const el = ref.current;
    const elNodeList = el.querySelectorAll('.project-card');
    elNodeList.forEach(projectNode => {
      refArray.push(projectNode.id)
    })
    
    refArray.forEach(el => {
      gsap.fromTo(`#${el}`, {
        opacity: 0,
        yPercent: 50
      }, {
        opacity: 1,
        yPercent: 0,
        duration: .5,
        scrollTrigger: {
          trigger: `#${el}`,
          start: 'top bottom'
        }
      })
    })
  },[])
  
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
      <ProjectGalleryContainer ref={ref}>
        {
          nodes.map((project, index) => (
            <ProjectGalleryItem attrs={{"id": `project-${index}`, "className": 'project-card'}} key={project.title} project={project} />
          ))
        }
      </ProjectGalleryContainer>
    )} />
  )
}


export default ProjectGallery
