import React, {useState} from 'react'

import {NavContainer, NavContent, NavLogo, NavIcon, NavList, NavItem, NavLink, MobileIconContainer, MobileNavIcon, MobileNavClose} from './navbarElements';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        <NavLogo>
          <NavIcon />
          Alex Ricci
        </NavLogo>
        <NavList isToggled={showMobileNav}>
          <NavItem>
            <NavLink to="/#about-section">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#projects-section">Projects</NavLink>
          </NavItem>
        </NavList>
        <MobileIconContainer onClick={() => setShowMobileNav(!showMobileNav)}>
          <MobileNavClose isToggled={showMobileNav}/>
          <MobileNavIcon isToggled={showMobileNav}/>
        </MobileIconContainer>
      </NavContent>
    </NavContainer>
  )
}

export default Navbar
