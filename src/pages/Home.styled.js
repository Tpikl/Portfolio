import styled from 'styled-components';

const HomeStyled = styled.div`
  .home_hero {
    height: 100vh;
  }

  .home_offset {
    background-color: ${({theme}) => theme.backgroundOffset};
  }
`;
export default HomeStyled;
