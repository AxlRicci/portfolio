import React from 'react'

import {FooterContainer, FooterContent, FooterCopyright, FooterNav, FooterNavItem, FooterNavLink, FooterExternalNavLink} from './footerElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCopyright>
        &#169;{ new Date().getFullYear() } Alex Ricci
        </FooterCopyright>
        <FooterNav>
          <FooterNavItem>
            <FooterExternalNavLink href="https://github.com/AxlRicci">
              Github
            </FooterExternalNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterExternalNavLink href="https://www.linkedin.com/in/alex-ricci-b347b619b">
              LinkedIn
            </FooterExternalNavLink>
          </FooterNavItem>
          <FooterNavItem>
            <FooterExternalNavLink href="mailto:alexricci.dev@gmail.com">
              Email
            </FooterExternalNavLink>
          </FooterNavItem>
        </FooterNav>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
