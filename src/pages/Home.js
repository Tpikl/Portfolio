import Row from '../shared/Flex/Row';

import Profile from '../components/Profile/Profile';
import Timeline from '../components/Timeline/Timeline';

import HomeStyled from './Home.styled';

const Home = () => {
  return (
    <HomeStyled>
      <Row>

        <Profile />
        <Timeline />

      </Row>
    </HomeStyled>
  );
};

export default Home;
