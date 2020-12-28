import styled from "styled-components";

const ExperienceStyled = styled.li`
  display: flex;

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
    border-bottom: 1px solid ${({theme}) => theme.tertiary};
    border-radius: 10px;
  }
  .experience_company {
    padding: 0 5px;
    font-size: 1.5em;
    font-weight: bold;
    color: ${({theme}) => theme.secondary};
  }
  .experience_title {
    margin-top: auto;
    margin-left: auto;
    padding: 0 5px;
    font-size: .9em;
    font-style: italic;
    color: ${({theme}) => theme.tertiary};
  }
  .experience_description {
    font-size: .9em;
  }
`;
export default ExperienceStyled;
