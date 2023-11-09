import styled from '@emotion/styled';
import { FONT_COLOR } from '../../shared/colors';
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from '../../shared/constants';

const mediumFontSize = 16;
const largeFontSize = 28;
const fontTabletMultiplier = 1.3;
const fontDesktopMultiplier = 1.5;

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 12,

  [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
    marginBottom: 0,
    marginRight: 16,
  },

  [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
    marginBottom: 24,
    marginRight: 0,
  },
});

export const Item = styled.div(
  ({ backgroundColor }: { backgroundColor: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor,
    padding: 12,

    [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
      padding: '20px 28px',
    },

    [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
      padding: '40px 20px',
    },
  })
);

export const Text = styled.p(({ size }: { size: 'md' | 'lg' }) => {
  const getFontSize = ({ multiplier }: { multiplier: number }) => {
    if (size === 'md') {
      return mediumFontSize * multiplier;
    }

    return largeFontSize * multiplier;
  };

  return {
    fontSize: getFontSize({ multiplier: 1 }),
    fontWeight: 'bold',
    margin: 0,
    color: FONT_COLOR,

    [`@media (min-width: ${BREAKPOINT_TABLET}px)`]: {
      fontSize: getFontSize({ multiplier: fontTabletMultiplier }),
    },

    [`@media (min-width: ${BREAKPOINT_DESKTOP}px)`]: {
      fontSize: getFontSize({ multiplier: fontDesktopMultiplier }),
    },
  };
});

export const Divider = styled.div({
  height: 1,
  width: '80px',
  backgroundColor: FONT_COLOR,
  margin: '8px 0',
});
