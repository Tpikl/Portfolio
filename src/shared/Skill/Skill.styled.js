import styled from 'styled-components';

const SkillStyled = styled.span`
  font-size: .8em;
  padding: 2px 4px;
  margin: 3px;
  border: 2px solid ${({theme}) => theme.tertiary};
  border-radius: 5px;
  line-height: 1em;
  cursor: pointer;
`;
export default SkillStyled;
