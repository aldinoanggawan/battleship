import { useState } from 'react';
import { BattleshipBoard } from '../components/BattleshipBoard/component';
import { Container, Content, ShipScoreWrapper } from './styles';
import { ScoreBoard } from '../components/ScoreBoard/component';
import { ShipList } from '../components/ShipList/component';
import { layoutData } from '../data/layout';

// create a 2D array of 10x10 that's initially null
const initialBoard: string[][] = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => null)
);

const Home = () => {
  const [board] = useState<string[][]>(initialBoard);

  return (
    <Container>
      <Content>
        <BattleshipBoard board={board} />
        <ShipScoreWrapper>
          <ScoreBoard score1='00' />
          <ShipList shipTypes={layoutData.shipTypes} />
        </ShipScoreWrapper>
      </Content>
    </Container>
  );
};

export default Home;
