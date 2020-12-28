import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <Link to='/' onClick={() => setOpen(false)}>Home</Link>
      <Link to='/Cv' onClick={() => setOpen(false)}>Curriculum Vitae</Link>
    </StyledMenu>
  )
};
export default Menu;
