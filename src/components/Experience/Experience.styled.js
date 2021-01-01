import styled from "styled-components";

const ExperienceStyled = styled.li`
  display: flex;
  line-height: 1.7em;
  margin-bottom: 10px;

  .experience_date {
    padding: 0 5px;
    font-size: .8em;
    font-style: italic;
    border-right: 1px solid var(--theme-textOffset);
    border-radius: 8px;
    color: var(--theme-textOffset);
  }

  .experience_content {
    margin-left: 10px;
    max-width: 750px;
    border-bottom: 2px solid var(--theme-textOffset);
    border-radius: 10px;
  }

  .experience_header {
    font-family: 'Roboto Slab', serif;
  }
  .experience_header-company {
    padding: 0 5px;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: underline;
    color: var(--theme-secondary);
  }
  .experience_header-title {
    padding-left: 20px;
    font-style: italic;
    color: var(--theme-textOffset);
  }

  .experience_responsibilities {
    font-size: .9em;
  }
`;
export default ExperienceStyled;
