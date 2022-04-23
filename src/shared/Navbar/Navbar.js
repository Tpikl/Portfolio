import { HashLink as Link } from 'react-router-hash-link';
import Palette from 'shared/Palette';
import { StyledNavbar } from './Navbar.styled';

const Navbar = ({setTheme}) => {
  return (
    <StyledNavbar>
      <Link to='/#About'>About</Link>
      <Link to='#Experience'>Experience</Link>
      <Link to='/#Academic'>Academic</Link>
      <a href='/resumeTaylerNichols-july2021.pdf' target='_blank' rel='noreferrer'>Resume</a>

      <Palette setTheme={setTheme} />
    </StyledNavbar>
  );
};
export default Navbar;
