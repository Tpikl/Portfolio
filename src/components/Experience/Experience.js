import Column from "../../shared/Flex/Column";
import ExperienceStyled from "./Experience.styled";

const Experience = ({exp}) => {
  return (
    <ExperienceStyled>
      <div className='experience_date'>{`${exp.startDate} - ${exp.endDate}`}</div>
      <div className='experience_content'>

        <Column className='experience_header'>
          <div className='experience_header-company'>{exp.company}</div>
          <div className='experience_header-title'>{exp.title}</div>
        </Column>

        <ul className='experience_description'>
          {exp.responsibilities.map((item, i) =>
            <li key={i}>{item}</li>
          )}
        </ul>
        <div className='experience_skills'>
          {exp.skills.map((item, i) =>
            <span key={i} className='experience_skills-item'>{item}</span>
          )}
        </div>
      </div>
    </ExperienceStyled>
  );
};
export default Experience;
