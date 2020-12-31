import { Row } from "../../shared/Flex";
import AcademicStyled from "./Academic.styled";

const Academic = () => {
  return (
    <AcademicStyled>
      {/* Title */}
      <h1>Academic</h1>

      {/* Education */}
      <div className='academic_education'>
        <Row align={'center'}>
          <div className='school_name'>University of Advancing Technology (UAT)</div>
          <div className='school_city'>Tempe, AZ</div>
        </Row>
        <div className='education_degree'>B.S. Network Security</div>
      </div>

      {/* Projects */}
      <h2>Projects:</h2>
      <div className='academic_projects'>

        <div className='project_box'>
          <div className='project_title'>[Buffer] Overflow</div>
          <div className='project_subtitle'>Security Research Group</div>
          <ul>
            <li>Co-founder and active participant in the largest student-run security research group in
the Western US.</li>
            <li>Group no longer holds meetings in Arizona.</li>
          </ul>
        </div>

        <div className='project_box'>
          <div className='project_title'>Root the Box</div>
          <div className='project_subtitle'>Annual Security CtF Event</div>
          <ul>
            <li>Coordinator of security events that educates attendees about identifying application
vulnerabilities and safe penetration testing.</li>
            <li>Participated on the server team developing vulnerable web applications in various
languages and frameworks.</li>
            <li>Overseeing inventory, cable management, room layout.</li>
          </ul>
        </div>

      </div>

    </AcademicStyled>
 );
};
export default Academic;
