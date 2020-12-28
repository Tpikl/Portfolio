import styled from 'styled-components';

const ProfileStyled = styled.div`
  width: 350px;
  text-align: center;

  & img {
    max-width: 300px;
    border-radius: 50%;
    border: 2px solid black;
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
