import { Directions, Position } from "./constants";

export interface IRobotOptions {
  position: Position;
  direction: Directions;
}

export default class Robot {
  public direction: Directions;
  private position: Position;

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

  public isOnTable(pos: number): boolean {
    return pos >= 0 && pos <= 4;
  }

  public move(): void {
    switch (this.direction) {
      case Directions.NORTH:
        if (this.isOnTable(this.position.y + 1)) {
          ++this.position.y;
        }
        break;
      case Directions.EAST:
        if (this.isOnTable(this.position.x + 1)) {
          ++this.position.x;
        }
        break;
      case Directions.SOUTH:
        if (this.isOnTable(this.position.y - 1)) {
          --this.position.y;
        }
        break;
      case Directions.WEST:
        if (this.isOnTable(this.position.x - 1)) {
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

  public execute(command: string): void {
    if (this.position && this.direction !== undefined) {
      switch (command) {
        case "LEFT":
          this.turnLeft();
          break;
        case "RIGHT":
          this.turnRight();
          break;
        case "MOVE":
          this.move();
          break;
        case "REPORT":
          process.stdout.write(this.toString() + "\n");
          break;
      }
    }
    if (command.includes("PLACE")) {
      let initialPlace: Array<string> = [];
      const initialPlaceStr: string = command
        .replace("PLACE ", "")
        .replace("PLACE", "");
      if (initialPlaceStr) {
        initialPlace = initialPlaceStr.split(",");
      }
      let [xVal = "0", yVal = "0", dir = "NORTH"] = initialPlace;
      if (!this.isOnTable(parseInt(xVal))) {
        xVal = "0";
      }
      if (!this.isOnTable(parseInt(yVal))) {
        yVal = "0";
      }
      if (!Object.keys(Directions).includes(dir)) {
        dir = "NORTH";
      }
      this.position = { x: parseInt(xVal), y: parseInt(yVal) };
      this.direction = Directions[dir as keyof typeof Directions];
    }
  }
}
