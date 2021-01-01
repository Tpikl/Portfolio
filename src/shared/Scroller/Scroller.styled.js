import styled from 'styled-components';

const ScrollerStyled = styled.div`
  position: fixed;
  right: 25px;
  transition: top .1s;

  @media (max-width: ${({theme}) => theme.mobile}) {
    display: none;
  }

  & div {
    width: 20px;
    align-items: center;
    justify-content: center;
  }
  & div::before {
    content: "";
    width: 1px;
    height: 100px;
    background-color: var(--theme-primary);
  }
  & div::after {
    content: "";
    width: 1px;
    height: 100px;
    background-color: var(--theme-primary);
  }
`;
export default ScrollerStyled;
