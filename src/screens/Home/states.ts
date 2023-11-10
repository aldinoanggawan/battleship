import { layoutData } from '../../data/layout';
import { HitCounts } from './types';

// create a 2D array of 10x10 that's initially null
export const getInitialBoard = (): string[][] => {
  return Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => null)
  );
};

// create a deep copy of layoutData.layout
export const getInitialLayout = (): typeof layoutData.layout => {
  return JSON.parse(JSON.stringify(layoutData.layout));
};

export const initialHitCounts: HitCounts = {
  carrier: 0,
  battleship: 0,
  cruiser: 0,
  submarine: 0,
  destroyer: 0,
};

export const scoreInitialState: number = 0;