import styled from 'styled-components';
import { THEMETYPES } from '../../theme';

const ProfileStyled = styled.div`
  width: 350px;
  text-align: center;

  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.primary};

  & img {
    max-width: 300px;
    border-radius: 50%;
    border: 3px solid ${({theme}) => theme.primary};
    ${({theme}) => theme.type === THEMETYPES.DARK &&`
      filter: grayscale(100%);
    `}
  }

  .name {
    font-size: 42px;
    font-weight: bold;
  }
  .subtitle {
    font-size: 18px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
`;
export default ProfileStyled;
