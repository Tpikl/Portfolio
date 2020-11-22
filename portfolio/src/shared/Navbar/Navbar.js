import React, { useState } from 'react';
import { Burger, Menu } from '../';
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </StyledNavbar>
  );
};
export default Navbar;