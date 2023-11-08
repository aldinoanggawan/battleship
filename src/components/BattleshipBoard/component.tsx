import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { Cell, Grid } from './styles';
import { BattleshipBoardProps } from './types';

export const BattleshipBoard: FC<BattleshipBoardProps> = ({ board }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    // get the 100% cell width and use it as the height
    setItemHeight(itemRef.current.clientWidth);
  }, []);

  return (
    <Grid>
      {board.map((row, rowIndex) => {
        return (
          <Fragment key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <Cell key={cellIndex} ref={itemRef} height={itemHeight}>
                  {cell}
                </Cell>
              );
            })}
          </Fragment>
        );
      })}
    </Grid>
  );
};
