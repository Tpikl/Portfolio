import SkillStyled from "./Skill.styled";

const Skill = ({name, className}) => {
  return (
    <SkillStyled className={className}>
      {name}
    </SkillStyled>
 );
};
export default Skill;
