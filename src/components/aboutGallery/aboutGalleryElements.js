import styled from 'styled-components';

export const AboutGalleryContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 90rem) {
    grid-template-columns: 1fr;
  }
`