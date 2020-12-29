import styled from "styled-components";

const HeroStyled = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Slab', serif;

  .hero_header {
    font-size: 4em;
    color: ${({theme}) => theme.secondary};
  }
  .hero_header-sub {
    font-size: 2em;
    font-family: 'Roboto', serif;
    color: ${({theme}) => theme.tertiary};
  }

  .hero_desc {
    max-width: 450px;
  }
`;
export default HeroStyled;
