import { HashLink as Link } from 'react-router-hash-link';
import Palette from '../Palette/Palette';
import { StyledNavbar } from './Navbar.styled';

const Navbar = ({setTheme}) => {
  return (
    <StyledNavbar>
      <Link to='/#About'>About</Link>
      <Link to='#Experience'>Experience</Link>
      <Link to='/#Academic'>Academic</Link>

      <Palette setTheme={setTheme} />
    </StyledNavbar>
  );
};
export default Navbar;
