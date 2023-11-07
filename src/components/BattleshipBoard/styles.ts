import styled from '@emotion/styled';
import { GRAY, BOARD_BACKGROUND_COLOR, ORANGE } from '../../shared/colors';
import { BREAKPOINT_MOBILE } from '../../shared/constants';

const boardBorderWidth = 8;

export const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',

  border: `${boardBorderWidth}px solid ${ORANGE}`,

  width: BREAKPOINT_MOBILE - boardBorderWidth * 2,

  backgroundColor: BOARD_BACKGROUND_COLOR,
});

export const Cell = styled.div(({ height = 0 }: { height?: number }) => ({
  width: '100%',
  height,
  borderRight: `1px solid ${GRAY}`,
  borderBottom: `1px solid ${GRAY}`,
  cursor: 'pointer',

  '&:nth-last-of-type(-n + 10)': {
    borderBottom: 'none',
  },
  '&:nth-last-of-type(10n + 1)': {
    borderRight: 'none',
  },
}));
