import { Directions, isOnTable } from "./constants";
interface Position {
  x: number;
  y: number;
}
interface IRobotOptions {
  position: Position;
  direction: Directions;
}

export default class Robot {
  public direction: Directions;
  private position: Position;

  constructor(options: IRobotOptions) {
    this.position = options.position;
    this.direction = options.direction;
  }

  public turnLeft(): void {
    this.direction =
      this.direction === Directions.NORTH
        ? Directions.WEST
        : this.direction - 1;
  }

  public turnRight(): void {
    this.direction =
      this.direction === Directions.WEST
        ? Directions.NORTH
        : this.direction + 1;
  }

  public move(): void {
    switch (this.direction) {
      case Directions.NORTH:
        if (isOnTable(this.position.y + 1)) {
          ++this.position.y;
        }
        break;
      case Directions.EAST:
        if (isOnTable(this.position.x + 1)) {
          ++this.position.x;
        }
        break;
      case Directions.SOUTH:
        if (isOnTable(this.position.y - 1)) {
          --this.position.y;
        }
        break;
      case Directions.WEST:
        if (isOnTable(this.position.x - 1)) {
          --this.position.x;
        }
        break;
      default:
    }
  }

  public toString() {
    return `${this.position.x}, ${this.position.y}, ${
      Directions[this.direction]
    }`;
  }
}
