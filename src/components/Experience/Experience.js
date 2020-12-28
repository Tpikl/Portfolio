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
      </div>
    </ExperienceStyled>
  );
};
export default Experience;
