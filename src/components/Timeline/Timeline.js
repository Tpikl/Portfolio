import { experience } from "data/experience";
import Experience from "components/Experience";

import TimelineStyled from "./Timeline.styled";

const Timeline = () => {
  return (
    <TimelineStyled>
      <h1>Experience</h1>
      {experience.map((item, i) =>
        <Experience key={i} exp={item} />
      )}
    </TimelineStyled>
  );
};
export default Timeline;
