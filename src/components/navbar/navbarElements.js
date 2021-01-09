import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { RiBearSmileLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const NavContainer = styled.nav`
  height: auto;
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  color: #1D1D1D;
  background-color: rgba(255,255,255, 0.75);
  backdrop-filter: blur(7px);
  border-bottom: 1px solid #ECECEC;
`

export const NavContent = styled.div`
  height: auto;
  width: 100%;
  max-width: 120rem;
  padding: 1rem 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLogo = styled.div`
  height: 100%;
  width: max-content;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 2rem;
  font-weight: 600;
`

export const NavIcon = styled(RiBearSmileLine)`
  height: 30px;
  width: 30px;
  margin-right: 1rem;

  fill: #1D1D1D;
`

export const NavList = styled.ul`
  height: ${({isToggled}) => isToggled ? "max-content" : "0"}; 
  padding: ${({isToggled}) => isToggled ? "3rem" : "0"};

  display: flex;
  flex-direction: column;
  gap: 3rem;


  position: absolute;
  top: 100%;
  right: 0;

  overflow: hidden;

  background-color: white;
  border-radius: 0 0 1rem 1rem;
  border: 1px solid #ebebeb;
  box-shadow: .25rem .25rem .7rem 0 rgba(0,0,0, .1);
  opacity: ${({isToggled}) => isToggled ? "1" : "0"};

  transition: all .2s;
  
  @media only screen and (min-width: 48em) {
    height: 100%;
    width: max-content;

    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    border: none;
    box-shadow: none;
    border-radius: 0;
    opacity: 1;
  }
`

export const NavItem = styled.li`
  padding: 0;

  list-style-type: none;
`

export const NavLink = styled(AnchorLink)`
  font-size: 1.4rem;
  font-weight: 500;

  color: inherit;
  text-decoration: none;

  cursor: pointer;
`

export const MobileIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 0 0 auto;

  position: relative;

  @media only screen and (min-width: 48em) {
    display: none;
  }
`

export const MobileNavIcon = styled(AiOutlineMenu)`
  height: ${({isToggled}) => isToggled ? "0" : "3rem"};
  width: ${({isToggled}) => isToggled ? "0" : "3rem"};
  
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  
  fill: #676767;
  opacity: ${({isToggled}) => isToggled ? "0" : "1"};

  transition: all .4s;
`

export const MobileNavClose = styled(AiOutlineClose)`
  height: ${({isToggled}) => isToggled ? "3rem" : "0"};
  width: ${({isToggled}) => isToggled ? "3rem" : "0"};
  
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  
  fill: #676767;
  opacity: ${({isToggled}) => isToggled ? "1" : "0"};

  transition: all .4s;
`

