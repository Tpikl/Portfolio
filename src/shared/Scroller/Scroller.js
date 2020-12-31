import { useEffect } from "react";
import Network from "shared/Network";
import ScrollerStyled from "./Scroller.styled";

const Scroller = () => {

  const handleScroll = () => {
    const networkHeight = document.getElementById('scroller')?.offsetHeight ?? 0;
    const currentScrollPosition = window.pageYOffset + 40;  //40 offset for navbar height.
    const pageHeight = document.body.scrollHeight;

    const currentScrollMod = (window.innerHeight * (currentScrollPosition + window.innerHeight)/pageHeight);
    const scrollCorrected = currentScrollPosition + currentScrollMod;

    const max = ((window.innerHeight-networkHeight)/window.innerHeight) * 100;
    const purePercent = scrollCorrected/pageHeight;
    const position = purePercent * max;

    // Resolves issue of redrawing styled component 200+ times when scrolling.
    document.getElementById('scroller').style.top = `${position}%`;
  };
  useEffect(() => handleScroll(), []);  // Set scroll on load.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollerStyled id='scroller'>
      <Network />
    </ScrollerStyled>
 );
};
export default Scroller;
