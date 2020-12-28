import Row from '../shared/Flex/Row';
import Column from '../shared/Flex/Column';
import Profile from '../components/Profile/Profile';
import Timeline from '../components/Timeline/Timeline';

import HomeStyled from './Home.styled';

const Home = () => {
  return (
    <HomeStyled>
      <Row>

        <Column>
          <Profile />
        </Column>

        <Column>
          <Row>
            <h1>Experience</h1>
            <Timeline />
          </Row>
        </Column>

      </Row>
    </HomeStyled>
  );
};

export default Home;
