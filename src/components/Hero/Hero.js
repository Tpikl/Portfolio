import HeroStyled from "./Hero.styled";

const Hero = () => {
  return (
    <HeroStyled>
      <div className='hero_header'>Tayler Nichols</div>
      <div className='hero_header-sub'>Sr. Software Engineer & Web Designer.</div>

      <div className='hero_desc'>I am a senior software engineer based in Arizona.
        Focused on web design and web application development.</div>
    </HeroStyled>
  );
};
export default Hero;
