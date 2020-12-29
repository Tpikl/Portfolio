import styled from "styled-components";

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-flow: wrap;
  }
`;
export default RowStyled;
