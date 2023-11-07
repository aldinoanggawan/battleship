import styled from '@emotion/styled';
import { FONT_COLOR } from '../../shared/colors';

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Item = styled.div(
  ({ backgroundColor }: { backgroundColor: string }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    backgroundColor,
    padding: 8,
  })
);

export const Text = styled.p(({ size }: { size: 'md' | 'lg' }) => ({
  fontSize: size === 'md' ? 16 : 24,
  fontWeight: 'bold',
  margin: 0,
  color: FONT_COLOR,
}));

export const Divider = styled.div({
  height: 1,
  width: '80px',
  backgroundColor: FONT_COLOR,
  margin: '8px 0',
});
