import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>
        <span role='img' aria-label='about us'>&#127968;</span>
        Home
      </a>
      <a href='/Resume'>
        <span role='img' aria-label='about us'>&#128195;</span>
        Resume
      </a>
    </StyledMenu>
  )
};
export default Menu;