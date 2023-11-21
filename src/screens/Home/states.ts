import { HitCounts } from './types';

// a 2D array of 10x10 that's initially null
export const initialBoard = Array.from({ length: 10 }, () =>
  Array.from({ length: 10 }, () => null)
);

export const initialHitCounts: HitCounts = {
  carrier: 0,
  battleship: 0,
  cruiser: 0,
  submarine: 0,
  destroyer: 0,
};

export const scoreInitialState: number = 0;
