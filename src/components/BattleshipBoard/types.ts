export interface BattleshipBoardProps {
  board: string[][];
  onClickCell: ({ i, j }: { i: number; j: number }) => void;
}
