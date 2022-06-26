import * as process from "process";
import Robot from "./robot";
import { Directions, isOnTable } from "./constants";

export default class Movement {
  private robot: Robot;

  public execute(command: string): void {
    if (this.robot) {
      switch (command) {
        case "LEFT":
          this.robot.turnLeft();
          break;
        case "RIGHT":
          this.robot.turnRight();
          break;
        case "MOVE":
          this.robot.move();
          break;
        case "REPORT":
          process.stdout.write(this.robot.toString() + "\n");
          break;
        default:
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
      if (!isOnTable(parseInt(xVal))) {
        xVal = "0";
      }
      if (!isOnTable(parseInt(yVal))) {
        yVal = "0";
      }
      if (!Object.keys(Directions).includes(dir)) {
        dir = "NORTH";
      }
      const position = { x: parseInt(xVal), y: parseInt(yVal) };
      const direction = Directions[dir as keyof typeof Directions];
      this.robot = new Robot({
        position,
        direction,
      });
    }
  }
}
