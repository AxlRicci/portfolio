import React, {useState} from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {NavContainer, NavContent, NavLogo, NavIcon, NavList, NavItem, NavLink, NavLinkExt, MobileIconContainer, MobileNavIcon, MobileNavClose} from './navbarElements';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          navLinks {
            title
            url
          }
        }
      }
    `} render={({sanityContent: {navLinks}}) => (
    <NavContainer>
      <NavContent>
        <NavLogo>
          <NavIcon />
          Alex Ricci
        </NavLogo>
        <NavList isToggled={showMobileNav}>
          {
            navLinks.map(({title, url}) => (
              <NavItem key={url}>
                {
                  url.split('')[0] === '/' ? (
                    <NavLink to={url}>{title}</NavLink>
                  ) : (
                    <NavLinkExt to={url}>{title}</NavLinkExt>
                  )
                }
              </NavItem>
            ))
          }
        </NavList>
        <MobileIconContainer onClick={() => setShowMobileNav(!showMobileNav)}>
          <MobileNavClose isToggled={showMobileNav}/>
          <MobileNavIcon isToggled={showMobileNav}/>
        </MobileIconContainer>
      </NavContent>
    </NavContainer>
    )} />
  )
}

export default Navbar
