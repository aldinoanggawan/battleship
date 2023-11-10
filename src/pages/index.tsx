import { useState } from 'react';
import { BattleshipBoard } from '../components/BattleshipBoard/component';
import {
  Button,
  Container,
  Content,
  GameOverWrapper,
  ShipScoreWrapper,
  Text,
} from './styles';
import { ScoreBoard } from '../components/ScoreBoard/component';
import { ShipList } from '../components/ShipList/component';
import { layoutData } from '../data/layout';
import { HitCounts } from './types';

// create a 2D array of 10x10 that's initially null
const getInitialBoard = (): string[][] => {
  return Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );
};

// create a deep copy of layoutData.layout
const getInitialLayout = (): typeof layoutData.layout => {
  return JSON.parse(JSON.stringify(layoutData.layout));
};

const initialHitCounts: HitCounts = {
  carrier: 0,
  battleship: 0,
  cruiser: 0,
  submarine: 0,
  destroyer: 0,
};

const Home = () => {
  const [board, setBoard] = useState<string[][]>(getInitialBoard());
  const [score1, setScore1] = useState<number>(0);
  const [hitCounts, setHitCounts] = useState<HitCounts>(initialHitCounts);
  const [layout, setLayout] = useState(getInitialLayout());

  const onClickCell = ({ i, j }: { i: number; j: number }): void => {
    // if the cell has been selected do an early return
    if (board[i][j]) return;

    // check if there's a ship at the selected cell
    const hitShipIndex = layout.findIndex((ship) =>
      ship.positions.some((position) => position[0] === i && position[1] === j)
    );

    // if there's a ship at the selected cell
    if (hitShipIndex !== -1) {
      const hitShip = layout[hitShipIndex];

      // update score
      setScore1((prevScore) => prevScore + 1);

      // update hit counts
      setHitCounts((prevHitCounts) => ({
        ...prevHitCounts,
        [hitShip.ship]: prevHitCounts[hitShip.ship] + 1,
      }));

      // update layout
      setLayout((prevLayout) => {
        const newLayout = [...prevLayout];

        // remove the hit position from the ship
        const newHitShip = newLayout[hitShipIndex];
        newHitShip.positions = newHitShip.positions.filter(
          (position) => !(position[0] === i && position[1] === j)
        );

        // remove the ship from layout if it's sunk
        if (newHitShip.positions.length === 0) {
          newLayout.splice(hitShipIndex, 1);
        }

        return newLayout;
      });
    }

    // update board
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      // assign X for hit and O for miss
      newBoard[i][j] = hitShipIndex !== -1 ? 'X' : 'O';
      return newBoard;
    });
  };

  const onRestart = (): void => {
    setLayout(getInitialLayout());
    setBoard(getInitialBoard());
    setScore1(0);
    setHitCounts(initialHitCounts);
  };

  const formattedScore1 = score1.toString().padStart(2, '0');

  return (
    <Container>
      {layout.length === 0 ? (
        <GameOverWrapper>
          <Text>Game over</Text>
          <Button onClick={onRestart}>Restart</Button>
        </GameOverWrapper>
      ) : (
        <Content>
          <BattleshipBoard board={board} onClickCell={onClickCell} />
          <ShipScoreWrapper>
            <ScoreBoard score1={formattedScore1} />
            <ShipList shipTypes={layoutData.shipTypes} hitCounts={hitCounts} />
          </ShipScoreWrapper>
        </Content>
      )}
    </Container>
  );
};

export default Home;
