import styled from 'styled-components';

const AcademicStyled = styled.div`
  margin: 250px auto;
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Education */
  .academic_education {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .school_name {
    font-size: 1.25em;
    font-family: 'Roboto Slab', serif;
    color: ${({theme}) => theme.secondary};
  }
  .school_city {
    line-height: 1em;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${({theme}) => theme.primary};
  }

  .education_degree {
    font-family: 'Roboto Slab', serif;
    color: ${({theme}) => theme.tertiary};
  }

  /* Projects */
  .academic_projects {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }
  .project_box {
    width: 400px;
    padding: 10px;
    border: 1px solid white;
    border-radius: 10px;
  }
  .project_box ul {
    padding-left: 25px;
    line-height: 1.7;
  }
  .project_title {
    font-size: 1.75em;
    font-family: 'Roboto Slab', serif;
    color: ${({theme}) => theme.secondary};
  }
  .project_subtitle {
    margin-left: 10px;
    font-size: 1.25em;
    color: ${({theme}) => theme.tertiary};
  }
`;
export default AcademicStyled;
