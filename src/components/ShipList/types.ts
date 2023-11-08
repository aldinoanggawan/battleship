export enum ShipType {
  Carrier = 'carrier',
  Battleship = 'battleship',
  Cruiser = 'cruiser',
  Submarine = 'submarine',
  Destroyer = 'destroyer',
}

export interface Ship {
  size: number;
  count: number;
}

export interface ShipListProps {
  shipTypes: Record<ShipType, Ship>;
}