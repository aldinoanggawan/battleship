import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from '../../shared/constants';
import { BLACK_TRANSLUCENT, ORANGE, WHITE } from '../../shared/colors';

export const Container = styled.div({
  minHeight: '100vh',
  overflow: 'hidden',

  [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
    padding: 16,
  },

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    padding: 24,
  },
});

export const Content = styled.div({
  maxWidth: BREAKPOINT_DESKTOP,
  margin: '0 auto',

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});

export const ShipScoreWrapper = styled.div({
  maxWidth: BREAKPOINT_TABLET,
  margin: '0 auto',

  [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
    display: 'flex',
    marginTop: 28,
  },

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 0,
    marginRight: 16,
    flex: 1,
  },
});

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
