import styled from "styled-components";

const ExperienceStyled = styled.li`
  display: flex;
  line-height: 1.7em;

  .experience_date {
    min-width: 100px;
    padding: 0 5px;
    font-size: .8em;
    font-style: italic;
    border-right: 1px solid ${({theme}) => theme.secondary};
    border-radius: 10px;
    color: ${({theme}) => theme.secondary};
  }

  .experience_content {
    margin-left: 10px;
    max-width: 750px;
    border-bottom: 2px solid ${({theme}) => theme.tertiary};
    border-radius: 10px;
  }

  .experience_header {
    font-family: 'Roboto Slab', serif;
    /* font-family: 'Crimson Text', serif; */
  }
  .experience_header-company {
    padding: 0 5px;
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: underline;
    color: ${({theme}) => theme.secondary};
  }
  .experience_header-title {
    padding-left: 20px;
    font-style: italic;
    color: ${({theme}) => theme.tertiary};
  }
  .experience_description {
    font-size: .9em;
  }

  .experience_skills {
    display: flex;
    flex-flow: wrap;
    font-size: .8em;
  }
  .experience_skills-item {
    padding: 2px 4px;
    margin: 3px;
    border: 2px solid ${({theme}) => theme.tertiary};
    border-radius: 5px;
    line-height: 1em;
  }
`;
export default ExperienceStyled;
