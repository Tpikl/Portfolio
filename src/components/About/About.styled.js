import styled from 'styled-components';

const AboutStyled = styled.div`
  margin: 200px auto;
  width: 850px;
  display: flex;
  flex-direction: column;

  .about_hello {
    margin: 0 0 25px 50px;
    color: var(--theme-primary);
  }
  .about_desc {
    margin: 0 50px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }

  .about_skills {
    align-content: space-between;
  }

  .about_pic {
    margin-bottom: auto;
    max-width: 225px;
    max-height: 225px;
    border-radius: 25%;
    ${({theme}) => theme.dark &&`
      filter: grayscale(100%);
    `}
    @media (max-width: ${({theme}) => theme.mobile}) {
      display: none;
    }
  }
`;
export default AboutStyled;
