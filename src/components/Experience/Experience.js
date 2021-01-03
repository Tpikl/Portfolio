import { Row, Column } from "shared/Flex";
import { Skill } from "shared/Skill";

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
          <span key={i}>
            <li>{item.desc}</li>

            {item.sub !== undefined &&
              <ul>
                {item.sub.map((sub, j) =>
                  <li key={j}>{sub}</li>
                )}
              </ul>
            }

          </span>
          )}
        </ul>

        {/* Skills */}
        <Row wrap={'true'}>
          {exp.skills.map((item, i) =>
            <Skill key={i} name={item} />
          )}
        </Row>
      </div>
    </ExperienceStyled>
  );
};
export default Experience;
