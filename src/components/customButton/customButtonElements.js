import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { IoIosArrowForward } from 'react-icons/io'


export const CustomButtonLabel = styled.span`
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  line-height: 1;

  &:active {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`

export const CustomButtonInternals = styled.div`
  height: max-content;
  width: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #06c;

  cursor: pointer;

  &:hover ${CustomButtonLabel} {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`

export const CustomLinkContainer = styled(AnchorLink).attrs(props => ({
  ...props.attrs,
}))`
  white-space: nowrap;
  text-decoration: none;

  font-size: ${({big, small}) => big ? "2.2rem" : small ? "1.4rem" : "1.8rem" };
  font-weight: ${({big, small}) => big ? "400" : small ? "500" : "400"};
`

export const CustomAnchorContainer = styled.a.attrs(props => ({
  ...props.attrs,
}))`
  white-space: nowrap;
  text-decoration: none;

  font-size: ${({big, small}) => big ? "2.2rem" : small ? "1.4rem" : "1.8rem" };
  font-weight: ${({big, small}) => big ? "400" : small ? "500" : "400"};
`



export const CustomButtonIcon = styled(IoIosArrowForward)`
  height: 100%;
  width: auto;
  fill: #06c;
`