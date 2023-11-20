import { useState } from 'react';
import { BattleshipBoard } from '../../components/BattleshipBoard/component';
import { GameOver } from '../../components/GameOver/component';
import { ScoreBoard } from '../../components/ScoreBoard/component';
import { ShipList } from '../../components/ShipList/component';
import { layoutData } from '../../data/layout';
import {
  getInitialBoard,
  getInitialLayout,
  initialHitCounts,
  scoreInitialState,
} from './states';
import { Container, Content, ShipScoreWrapper } from './styles';
import { HitCounts } from './types';

export const Home = () => {
  const [board, setBoard] = useState<string[][]>(getInitialBoard);
  const [score1, setScore1] = useState<number>(scoreInitialState);
  const [hitCounts, setHitCounts] = useState<HitCounts>(initialHitCounts);
  const [layout, setLayout] = useState(getInitialLayout);

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
    setScore1(scoreInitialState);
    setHitCounts(initialHitCounts);
  };

  const formattedScore1 = score1.toString().padStart(2, '0');

  return (
    <Container>
      <Content>
        <BattleshipBoard board={board} onClickCell={onClickCell} />
        <ShipScoreWrapper>
          <ScoreBoard score1={formattedScore1} />
          <ShipList shipTypes={layoutData.shipTypes} hitCounts={hitCounts} />
        </ShipScoreWrapper>
      </Content>
      {layout.length === 0 && <GameOver onClick={onRestart} />}
    </Container>
  );
};
