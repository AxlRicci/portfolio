import React from 'react'

import { CustomLinkContainer, CustomAnchorContainer, CustomButtonIcon } from './customButtonElements';

const CustomButton = ({attrs, big, small, label, to, external}) => {
  if (external) {
    return (
      <CustomAnchorContainer {...attrs} href={to} target="_blank" rel='noopener noreferrer' big={big} small={small}>
      {label}<CustomButtonIcon />
      </CustomAnchorContainer>
    )
  }
  return (
      <CustomLinkContainer {...attrs} to={to} big={big} small={small}>
      {label}<CustomButtonIcon />
      </CustomLinkContainer>
  )
}

export default CustomButton
