import React from 'react'

import {FooterContainer, FooterContent, FooterCopyright, FooterNav, FooterNavItem, FooterNavLink} from './footerElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopyright>
        &#169;{ new Date().getFullYear() } Alex Ricci
        </FooterCopyright>
        <FooterNav>
          <FooterNavItem>
            <FooterNavLink external="true" to="#">
              Github
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink external="true" to="#">
              LinkedIn
            </FooterNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterNavLink external="true" to="#">
              Email
            </FooterNavLink>
          </FooterNavItem>
        </FooterNav>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
