import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CustomButton from '../customButton';

import {CtaContentCard, CtaHeading, CtaSectionContainer} from './ctaSectionElements'

const CtaSection = () => {
  return (
    <StaticQuery query={graphql`
      {
        sanityContent {
          ctaTitle
          ctaButtonText
        }
      }
    `} render={({sanityContent: {ctaTitle, ctaButtonText}}) => (
      <CtaSectionContainer>
        <CtaContentCard>
          <CtaHeading>
            {ctaTitle}
          </CtaHeading>
          <CustomButton big="true" label={ctaButtonText} external="true" to="mailto:alexricci.dev@gmail.com" />
        </CtaContentCard>
      </CtaSectionContainer>
    )} />
  )
}

export default CtaSection
