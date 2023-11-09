import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from '../../shared/constants';

export const Img = styled.img(({ icon }: { icon?: boolean }) => {
  if (icon) {
    return {
      width: 12,
      height: 12,
      marginRight: 2,

      [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 16,
        height: 16,
        marginRight: 4,
      },

      [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
        width: 20,
        height: 20,
        marginRight: 8,
      },
    };
  }

  return {
    maxWidth: 72,
    width: '100%',
    marginRight: 12,

    [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
      maxWidth: 120,
    },

    [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
      maxWidth: 160,
    },
  };
});

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridAutoFlow: 'column',
  gap: 4,
  margin: '0 4px',

  [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
    gap: 8,
  },

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    display: 'block',
  },
});

export const Item = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 8,

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    marginBottom: 20,
  },
});
