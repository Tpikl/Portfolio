import Column from "../../shared/Flex/Column";
import ExperienceStyled from "./Experience.styled";

const Experience = ({exp}) => {
  return (
    <ExperienceStyled>
      {/* Date */}
      <span className='experience_date'>{`${exp.startDate} - ${exp.endDate}`}</span>

      <div className='experience_content'>
        {/* Header */}
        <Column className='experience_header'>
          <div className='experience_header-company'>{exp.company}</div>
          <div className='experience_header-title'>{exp.title}</div>
        </Column>
        {/* Responsibilities */}
        <ul className='experience_responsibilities'>
          {exp.responsibilities.map((item, i) =>
            <li key={i}>{item}</li>
          )}
        </ul>
        {/* Skills */}
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
