import Row from '../shared/Flex/Row';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Timeline from '../components/Timeline/Timeline';
import Academic from '../components/Academic/Academic';
import Footer from '../shared/Footer/Footer';

import HomeStyled from './Home.styled';

const Home = () => {
  return (
    <HomeStyled>

      <Row className={'home_hero'}>
        <Hero />
      </Row>
      <Row id='About' className={'home_offset'}>
        <About />
      </Row>
      <Row id='Experience'>
        <Timeline />
      </Row>
      <Row id='Academic' className={'home_offset'}>
        <Academic />
      </Row>
      <Footer />

    </HomeStyled>
  );
};

export default Home;
