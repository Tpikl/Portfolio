import styled from 'styled-components';

const NetworkStyled = styled.div`
  color: ${({theme}) => theme.tertiary};

  & svg {
    margin: 5px;
  }
  & a {
    text-decoration: none;
    color: ${({theme}) => theme.tertiary};
  }
`;
export default NetworkStyled;
