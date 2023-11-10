import { FC, memo } from 'react';
import { ScoreProps } from './types';
import { Container, Divider, Item, Text } from './styles';
import { GREEN, ORANGE } from '../../shared/colors';

export const ScoreBoard: FC<ScoreProps> = memo(({ score1, score2 = '00' }) => {
  return (
    <Container>
      <Item backgroundColor={ORANGE}>
        <Text size='lg'>{score1}</Text>
        <Divider />
        <Text size='md'>player 1</Text>
      </Item>
      <Item backgroundColor={GREEN}>
        <Text size='lg'>{score2}</Text>
        <Divider />
        <Text size='md'>player 2</Text>
      </Item>
    </Container>
  );
});
