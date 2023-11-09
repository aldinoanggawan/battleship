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
  const [board, setBoard] = useState<string[][]>(initialBoard);
  const [score1, setScore1] = useState(0);

  const onClickCell = ({ i, j }: { i: number; j: number }): void => {
    // if the cell has been selected do an early return
    if (board[i][j]) return;

    // check if there's a ship at the selected cell
    const hitShipIndex = layoutData.layout.findIndex((ship) =>
      ship.positions.some((position) => position[0] === i && position[1] === j)
    );

    // if there's a ship at the selected cell
    if (hitShipIndex !== -1) {
      // update score
      setScore1((prevScore) => prevScore + 1);
    }

    const newBoard = [...board];
    // assign X for hit and O for miss
    newBoard[i][j] = hitShipIndex !== -1 ? 'X' : 'O';
    setBoard(newBoard);
  };

  const formattedScore1 = score1.toString().padStart(2, '0');

  return (
    <Container>
      <Content>
        <BattleshipBoard board={board} onClickCell={onClickCell} />
        <ShipScoreWrapper>
          <ScoreBoard score1={formattedScore1} />
          <ShipList shipTypes={layoutData.shipTypes} />
        </ShipScoreWrapper>
      </Content>
    </Container>
  );
};

export default Home;
