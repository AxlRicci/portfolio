import React from 'react'

import { CustomLinkContainer, CustomAnchorContainer, CustomButtonInternals, CustomButtonLabel, CustomButtonIcon } from './customButtonElements';

const CustomButton = ({attrs, big, small, label, to, external}) => {
  if (external) {
    return (
      <CustomAnchorContainer {...attrs} href={to} target="_blank" rel='noopener noreferrer' big={big} small={small}>
        <CustomButtonInternals>
          <CustomButtonLabel>{label}</CustomButtonLabel>
          <CustomButtonIcon />
        </CustomButtonInternals>
      </CustomAnchorContainer>
    )
  }
  return (
      <CustomLinkContainer {...attrs} to={to} big={big} small={small}>
        <CustomButtonInternals>
          <CustomButtonLabel>{label}</CustomButtonLabel>
          <CustomButtonIcon />
        </CustomButtonInternals>
      </CustomLinkContainer>
  )
}

export default CustomButton
