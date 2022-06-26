export enum Directions {
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST",
}

export const isOnTable = (pos: number): boolean => {
  return pos >= 0 && pos <= 4;
};

export interface Position {
  x: number;
  y: number;
}

export interface RobotOptions {
  position: Position;
  direction: Directions;
}
