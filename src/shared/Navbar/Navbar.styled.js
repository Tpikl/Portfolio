import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100vw;
  padding: 0 25vw;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondary};

  & a {
    margin: 10px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.tertiary};
  }
`;
