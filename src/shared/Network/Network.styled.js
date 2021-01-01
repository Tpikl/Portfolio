import styled from 'styled-components';

const NetworkStyled = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;

  & a {
    margin: 5px;
    font-size: 1.25em;
  }

  & a:hover {
    transition: .5s;
  }

  .network_cv {
    margin: auto;
    font-size: .85em;
    font-weight: bolder;
  }
`;
export default NetworkStyled;
