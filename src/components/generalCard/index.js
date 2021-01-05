import React from 'react'

import {CardContainer} from './generalCardElements'

const GeneralCard = ({children, attrs}) => {
  return (
    <CardContainer attrs={{...attrs}}>
      {children}
    </CardContainer>
  )
}

export default GeneralCard
