import styled from 'styled-components';

const NetworkStyled = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  & a {
    margin: 5px;
    font-size: 1.25em;
    text-decoration: none;
    color: ${({theme}) => theme.tertiary};
  }

  & a:hover {
    transition: .5s;
    color: ${({theme}) => theme.hover};
  }

  .network_cv {
    margin: auto;
    font-size: .85em;
    font-weight: bolder;
  }
`;
export default NetworkStyled;
