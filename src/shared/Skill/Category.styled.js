import styled from 'styled-components';

const CategoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10px;
  min-width: 200px;
  max-width: 200px;
  margin-bottom: 10px;
  border-radius: 2px;

  .cat_icon {
    margin: 10px auto;
    font-size: 4em;
    color: var(--theme-secondary);
  }
  .cat_title {
    font-size: 1.5em;
    text-align: center;
    font-family: 'Roboto Slab', serif;
  }
  .cat_skills {
    font-size: .8em;
    line-height: 2em;
    text-align: center;
  }
`;
export default CategoryStyled;
