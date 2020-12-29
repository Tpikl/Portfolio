import styled from 'styled-components';
import Themes from '../../themes';

const ProfileStyled = styled.div`
  width: 350px;
  text-align: center;

  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.primary};

  & img {
    max-width: 300px;
    border-radius: 50%;
    ${({theme}) => theme === Themes.dark &&`
      filter: grayscale(100%);
    `}
  }

  .name {
    font-size: 2.5em;
    font-weight: bold;
  }
  .subtitle {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;
export default ProfileStyled;
