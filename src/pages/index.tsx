import { useState } from 'react';
import { BattleshipBoard } from '../components/BattleshipBoard/component';
import { Container } from './styles';
import { ScoreBoard } from '../components/ScoreBoard/component';

// create a 2D array of 10x10 that's initially null
const initialBoard: string[][] = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => null)
);

const Home = () => {
  const [board] = useState<string[][]>(initialBoard);

  return (
    <Container>
      <BattleshipBoard board={board} />
      <ScoreBoard score1='00' />
    </Container>
  );
};

export default Home;
