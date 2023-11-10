import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { Cell, Grid, Img } from './styles';
import { BattleshipBoardProps } from './types';
import { images } from '../../data/images';

export const BattleshipBoard: FC<BattleshipBoardProps> = ({
  board,
  onClickCell,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    // get the 100% cell width and use it as the height
    setItemHeight(itemRef.current.clientWidth);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setItemHeight(itemRef.current.clientWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Grid>
      {board.map((row, rowIndex) => {
        return (
          <Fragment key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <Cell
                  key={cellIndex}
                  ref={itemRef}
                  height={itemHeight}
                  onClick={() => onClickCell({ i: rowIndex, j: cellIndex })}
                >
                  {cell && (
                    <Img src={cell === 'X' ? images.hit : images.miss} />
                  )}
                </Cell>
              );
            })}
          </Fragment>
        );
      })}
    </Grid>
  );
};
