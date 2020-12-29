import { experiences } from "../../experience";
import Experience from "../Experience/Experience";
import TimelineStyled from "./Timeline.styled";

const Timeline = () => {
  return (
    <TimelineStyled>
      {experiences.map((item, i) =>
        <Experience key={i} exp={item} />
      )}
    </TimelineStyled>
  );
};
export default Timeline;
