import { FC } from 'react';
import { Button, GameOverWrapper, Text } from './styles';
import { GameOverProps } from './types';

export const GameOver: FC<GameOverProps> = ({ onClick }) => {
  return (
    <GameOverWrapper>
      <Text>You have sunk all the ships!</Text>
      <Button onClick={onClick}>Play again</Button>
    </GameOverWrapper>
  );
};
