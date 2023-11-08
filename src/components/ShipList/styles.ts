import styled from '@emotion/styled';

export const Img = styled.img(({ icon }: { icon?: boolean }) => {
  if (icon) {
    return {
      width: 12,
      height: 12,
    };
  }

  return {
    maxWidth: 76,
    width: '100%',
    marginRight: 12,
  };
});

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridAutoFlow: 'column',
  marginTop: 4,
});

export const Item = styled.div({
  marginTop: 8,
  display: 'flex',
  alignItems: 'center',
});

