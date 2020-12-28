import Row from "../../shared/Flex/Row";
import ExperienceStyled from "./Experience.styled";

const Experience = ({exp}) => {
  return (
    <ExperienceStyled>
      <div className='experience_date'>{`${exp.startDate} - ${exp.endDate}`}</div>
      <div className='experience_content'>
        <Row>
          <div className='experience_company'>{exp.company}</div>
          <div className='experience_title'>{exp.title}</div>
        </Row>
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
