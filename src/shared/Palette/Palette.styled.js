import styled from 'styled-components';

const PaletteStyled = styled.div`
  position: absolute;
  top: .2rem;
  right: .2rem;
  font-size: 1.5em;

  & svg {
    color: ${({theme}) => theme.tertiary};
    cursor: pointer;
  }
  & svg:hover {
    color: ${({theme}) => theme.hover};
  }
`;
export default PaletteStyled;
