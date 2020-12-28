import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>Home</a>
      <a href='/resumeTaylerNichols.pdf' target="_blank">Resume</a>
      <a href='/Cv'>Curriculum Vitae</a>
    </StyledMenu>
  )
};
export default Menu;
