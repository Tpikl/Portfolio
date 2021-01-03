import { Row } from 'shared/Flex';

import { Hero, About, Timeline, Academic } from 'components';
import Footer from 'shared/Footer';

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
