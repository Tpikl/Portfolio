import styled from "styled-components";

const HeroStyled = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;

  .hero_header {
    font-size: 4em;
    font-family: 'Roboto Slab', serif;
    color: var(--theme-hover);
  }

  .hero_header-sub {
    font-size: 2em;
    color: var(--theme-primary);
  }

  .hero_desc {
    max-width: 450px;
  }
`;
export default HeroStyled;
