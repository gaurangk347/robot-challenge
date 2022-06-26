import { RobotOptions, Directions } from "../../src/constants";
import Robot from "../../src/robot";

describe("Robot unit tests", () => {
  const options: RobotOptions = {
    position: { x: 0, y: 0 },
    direction: Directions.NORTH,
  };
  it("should be initialized with the given params", () => {
    const robot: Robot = new Robot(options);
    expect(robot.toString()).toBe("Output: 0, 0, NORTH");
  });

  it("should turn the robot left", () => {
    const robot: Robot = new Robot(options);

    robot.turnLeft();
    expect(robot.direction).toBe(Directions.WEST);

    robot.turnLeft();
    expect(robot.direction).toBe(Directions.SOUTH);

    robot.turnLeft();
    expect(robot.direction).toBe(Directions.EAST);

    robot.turnLeft();
    expect(robot.direction).toBe(Directions.NORTH);
  });

  it("should turn the robot right", () => {
    const robot: Robot = new Robot(options);

    robot.turnRight();
    expect(robot.direction).toBe(Directions.EAST);

    robot.turnRight();
    expect(robot.direction).toBe(Directions.SOUTH);

    robot.turnRight();
    expect(robot.direction).toBe(Directions.WEST);

    robot.turnRight();
    expect(robot.direction).toBe(Directions.NORTH);
  });

  it("should move forward when away from table top edge", () => {
    const robot: Robot = new Robot(options);

    robot.move();
    expect(robot.toString()).toBe("Output: 0, 1, NORTH");
  });

  it("should not move forward when at the edge of table top", () => {
    const robot: Robot = new Robot({ ...options, position: { x: 0, y: 4 } });

    expect(robot.toString()).toBe("Output: 0, 4, NORTH");
    robot.move();
    expect(robot.toString()).toBe("Output: 0, 4, NORTH");
  });
});
