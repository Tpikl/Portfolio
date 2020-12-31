import { Row, Column } from "../../shared/Flex";
import { Category } from "../../shared/Skill";
import { skills } from '../../experience';

import AboutStyled from "./About.styled";

const About = () => {
  return (
    <AboutStyled>
      <h2 className='about_hello'>Hey there,</h2>
      <div className='about_desc'>
        <span>I'm an experienced software engineer out of Phoenix, AZ.</span>
        <span>I have a strong passion for building and maintaining web applications of all types. My aim is to design functional and visibly stunning websites.</span>
      </div>

      <Row>
        <Row wrap={'true'} className={'about_skills'}>
          {skills.map((item, i) =>
            <Category key={i} category={item} />
           )}
        </Row>
        <Column>
          <img className='about_pic' src='profile.png' alt='Profile.'></img>
        </Column>
      </Row>
    </AboutStyled>
 );
};
export default About;
