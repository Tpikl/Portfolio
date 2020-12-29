import Row from '../shared/Flex/Row';

import Hero from '../components/Hero/Hero';
import Timeline from '../components/Timeline/Timeline';

import HomeStyled from './Home.styled';

const Home = () => {
  return (
    <HomeStyled>
      {/* <Profile /> */}

      <Row className={'home_hero'}>
        <Hero />
      </Row>
      <Row>
        <Timeline />
      </Row>

    </HomeStyled>
  );
};

export default Home;
