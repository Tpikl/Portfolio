import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>
        <span role='img' aria-label='about us'>&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About Us
      </a>
      <a href='/'>
        <span role='img' aria-label='price'>&#x1f4b8;</span>
        Pricing
      </a>
      <a href='/'>
        <span role='img' aria-label='contract'>&#x1f4e9;</span>
        Contract
      </a>
    </StyledMenu>
  )
};
export default Menu;