import { experiences } from "../../experience";
import Experience from "../Experience";

import TimelineStyled from "./Timeline.styled";

const Timeline = () => {
  return (
    <TimelineStyled>
      <h1>Experience</h1>
      {experiences.map((item, i) =>
        <Experience key={i} exp={item} />
      )}
    </TimelineStyled>
  );
};
export default Timeline;
