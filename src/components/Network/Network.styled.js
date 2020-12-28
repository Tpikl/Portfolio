import styled from 'styled-components';

const NetworkStyled = styled.div`
  color: ${({theme}) => theme.secondaryLight};

  & svg {
    margin: 5px;
  }
  & a {
    text-decoration: none;
    color: ${({theme}) => theme.secondaryLight};
  }
`;
export default NetworkStyled;
