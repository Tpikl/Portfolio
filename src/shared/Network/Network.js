import { useEffect, useState } from "react";
import Column from "../Flex/Column";
import NetworkStyled from "./Network.styled";

const Network = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const networkHeight = document.getElementById('NetworkScroll')?.offsetHeight ?? 0;
    const currentScrollPosition = window.pageYOffset + 40;  //40 offset for navbar height.
    const pageHeight = document.body.scrollHeight;

    const currentScrollMod = (window.innerHeight * (currentScrollPosition + window.innerHeight)/pageHeight);
    const scrollCorrected = currentScrollPosition + currentScrollMod;

    const max = ((window.innerHeight-networkHeight)/window.innerHeight) * 100;
    const purePercent = scrollCorrected/pageHeight;
    const position = purePercent * max;

    setScrollPosition(position);
  };
  useEffect(() => handleScroll(), []);  // Set scroll on load.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NetworkStyled id='NetworkScroll' scroll={scrollPosition}>
      <Column className='network_icons'>
        <a href='mailto:tayler@taynich.dev'>
          <i className='fas fa-envelope'></i>
        </a>
        <a href='https://www.linkedin.com/in/taylernichols/' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/Tpikl' target='_blank' rel='noreferrer'>
          <i className='fab fa-github-square'></i>
        </a>
        <a href='/resumeTaylerNichols.pdf' target='_blank'>
          <div className='network_cv'>CV</div>
        </a>
      </Column>
    </NetworkStyled>
  );
};
export default Network;
