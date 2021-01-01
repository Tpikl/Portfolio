import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100vw;
  padding: 0 25vw;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  background-color: var(--theme-backgroundOffset);
  box-shadow: 0 5px 20px -12px black;

  & a {
    margin: 10px 0;
  }
`;
