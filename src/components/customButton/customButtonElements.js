import styled from 'styled-components';
import {Link} from 'gatsby';
import { IoIosArrowForward } from 'react-icons/io'

export const CustomLinkContainer = styled(Link).attrs(props => ({
  ...props.attrs,
}))`
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  background-color: transparent;
  border: none;
  color: #1984EA;
  font-size: ${({big, small}) => big ? "2rem" : small ? "1.6rem" : "1.8rem" };
  font-weight: ${({big, small}) => big ? "400" : small ? "500" : "400"}
  white-space: nowrap;
  text-decoration: none;

  cursor: pointer;
`

export const CustomAnchorContainer = styled.a.attrs(props => ({
  ...props.attrs,
}))`
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  background-color: transparent;
  border: none;
  color: #1984EA;
  font-size: ${({big, small}) => big ? "2rem" : small ? "1.6rem" : "1.8rem" };
  font-weight: ${({big, small}) => big ? "400" : small ? "500" : "400"}
  white-space: nowrap;
  text-decoration: none;

  cursor: pointer;
`

export const CustomButtonIcon = styled(IoIosArrowForward)`
  height: 100%;
  width: auto;
  
  fill: #1984EA;
  line-height: 1;
`