import styled from 'styled-components';

const NetworkStyled = styled.div`
  position: fixed;
  bottom: 10%;
  color: ${({theme}) => theme.tertiary};

  @media (max-width: ${({theme}) => theme.mobile}) {
    display: none;
  }

  & svg {
    margin: 5px;
    font-size: 1.25em;
  }
  & a {
    text-decoration: none;
    color: ${({theme}) => theme.tertiary};
  }

  .network_icons {
    align-items: center;
  }
  .network_icons::before {
    content: "";
    width: 1px;
    height: 100px;
    background-color: ${({theme}) => theme.secondary};
  }
  .network_icons::after {
    content: "";
    width: 1px;
    height: 100px;
    background-color: ${({theme}) => theme.secondary};
  }

  .network_cv {
    margin: 3px;
    font-weight: bolder;
  }
`;
export default NetworkStyled;
