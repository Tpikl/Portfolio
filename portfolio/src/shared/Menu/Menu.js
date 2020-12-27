import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>Home</a>
      <a href='/Resume'>Resume</a>
    </StyledMenu>
  )
};
export default Menu;
