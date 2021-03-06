import styled from "styled-components";

const RowStyled = styled.div`
  display: flex;
  ${({wrap}) => wrap &&
    `flex-flow: wrap;`
  }
  ${({align}) => align &&
    `align-items: ${align};`
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-flow: wrap;
  }
`;
export default RowStyled;
