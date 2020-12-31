import styled from 'styled-components';
import Themes from 'themes';

const AboutStyled = styled.div`
  margin: 200px auto;
  width: 850px;
  display: flex;
  flex-direction: column;

  .about_hello {
    margin: 0 0 25px 50px;
    color: ${({theme}) => theme.tertiary};
  }
  .about_desc {
    margin: 0 50px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid white;
  }

  .about_skills {
    justify-content: center;
    align-content: space-between;
  }

  .about_pic {
    margin: auto 0;
    max-width: 250px;
    max-height: 250px;
    border-radius: 25%;
    ${({theme}) => theme === Themes.dark &&`
      filter: grayscale(100%);
    `}
  }
`;
export default AboutStyled;
