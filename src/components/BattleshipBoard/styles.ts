import styled from '@emotion/styled';
import { GRAY, BOARD_BACKGROUND_COLOR, ORANGE } from '../../shared/colors';
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
} from '../../shared/constants';

export const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  border: `8px solid ${ORANGE}`,
  minWidth: BREAKPOINT_MOBILE,
  maxWidth: BREAKPOINT_TABLET,
  margin: '0 auto',

  backgroundColor: BOARD_BACKGROUND_COLOR,

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    flex: 2,
  },
});

export const Cell = styled.div(({ height = 0 }: { height?: number }) => ({
  width: '100%',
  height,
  borderRight: `1px solid ${GRAY}`,
  borderBottom: `1px solid ${GRAY}`,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: GRAY,
  },

  '&:nth-last-of-type(-n + 10)': {
    borderBottom: 'none',
  },
  '&:nth-last-of-type(10n + 1)': {
    borderRight: 'none',
  },
}));
