import styled from 'styled-components';

const HomeStyled = styled.div`
  height: 100%;
  text-align: center;
  justify-content: center;

  .name {
    font-size: 48px;
    font-weight: bold;
  }
  .subtitle {
    font-size: 24px;
  }
  & img {
    background-color: black;
    border-radius: 10px;
  }
`;
export default HomeStyled;
