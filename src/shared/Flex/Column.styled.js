import styled from "styled-components";

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({theme}) => theme.mobile}) {

  }
`;
export default ColumnStyled;
