import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from '../../shared/constants';

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
