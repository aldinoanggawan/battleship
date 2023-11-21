import styled from '@emotion/styled';
import { BLACK_TRANSLUCENT, ORANGE, WHITE } from '../../shared/colors';

export const GameOverWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: BLACK_TRANSLUCENT,
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  padding: 20,
});

export const Text = styled.p({
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '0 0 24px',
  color: WHITE,
});

export const Button = styled.button({
  backgroundColor: ORANGE,
  border: 'none',
  borderRadius: 4,
  padding: '16px 32px',
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.8,
  },
});
