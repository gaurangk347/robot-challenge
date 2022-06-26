export enum Directions {
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST",
}

export interface Position {
  x: number;
  y: number;
}

export interface RobotOptions {
  position: Position;
  direction: Directions;
}

// check if the desired pos is on the table or not
export const isOnTable = (pos: number): boolean => {
  return pos >= 0 && pos <= 4;
};
