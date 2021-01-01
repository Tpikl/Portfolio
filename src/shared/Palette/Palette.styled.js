import styled from 'styled-components';

const PaletteStyled = styled.div`
  position: fixed;
  top: 5px;
  right: 10px;
  font-size: 1.5em;

  & svg {
    cursor: pointer;
    color: var(--theme-text);
  }
  & svg:hover {
    color: var(--theme-secondary);
  }
`;
export default PaletteStyled;
