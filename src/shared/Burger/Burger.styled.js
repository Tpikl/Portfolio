import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: .5rem;
  left: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: ${({theme}) => theme.tertiary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
