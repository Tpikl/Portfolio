import PaletteStyled from "./Palette.styled";

const Palette = ({setTheme}) => {
  return (
    <PaletteStyled title='Toggle theme.' onClick={() => setTheme()}>
      <i className='fas fa-palette'></i>
    </PaletteStyled>
  );
};
export default Palette;
