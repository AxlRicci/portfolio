import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterContainer = styled.footer`
  height: auto;
  width: 100%;
  
  border-top: 1px solid #ECECEC;
`

export const FooterContent = styled.div`
  height: auto;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: #626262;
  
  font-weight: 400;
  font-size: 1.2rem;

  @media only screen and (min-width: 90em) {
    font-size: 1.4rem;
  }
`

export const FooterCopyright = styled.p`
  
`

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  list-style-type: none;
`

export const FooterNavItem = styled.li`
  
`

export const FooterNavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`

