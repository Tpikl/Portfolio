import { useState } from "react";
import PaletteStyled from "./Palette.styled";

const Palette = ({setTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <PaletteStyled title='Toggle theme.' onClick={() => setTheme()}>
      <i className='fas fa-palette' onClick={() => setMenuOpen(!menuOpen)}></i>
    </PaletteStyled>
  );
};
export default Palette;
