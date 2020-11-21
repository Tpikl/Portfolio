import React, { useState } from 'react';
import { Burger, Menu } from './';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};
export default Navbar;