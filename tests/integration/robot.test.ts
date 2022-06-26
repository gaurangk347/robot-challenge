import { RobotOptions, Directions } from "../../src/constants";
import Robot from "../../src/robot";

describe("Robot integration tests", () => {
  const options: RobotOptions = {
    position: { x: 0, y: 0 },
    direction: Directions.NORTH,
  };

  it("should move robot freely around the table", () => {
    const robot: Robot = new Robot(options);

    robot.move();
    robot.move();
    robot.turnRight();
    robot.move();
    robot.move();
    expect(robot.toString()).toBe("2, 2, EAST");
  });

  it("should ignore movements outside the edge", () => {
    const robot: Robot = new Robot(options);
    expect(robot.toString()).toBe("0, 0, NORTH");
    robot.move();
    robot.turnLeft();
    robot.move();
    expect(robot.toString()).toBe("0, 1, WEST");
  });

  it("should change direction even when cannot move around on corner", () => {
    const robot: Robot = new Robot({
      position: { x: 4, y: 4 },
      direction: Directions.EAST,
    });
    expect(robot.toString()).toBe("4, 4, EAST");

    robot.move();
    robot.turnLeft();
    expect(robot.toString()).toBe("4, 4, NORTH");

    robot.move();
    robot.turnLeft();
    expect(robot.toString()).toBe("4, 4, WEST");
  });
});
