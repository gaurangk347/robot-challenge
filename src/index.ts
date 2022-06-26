#!/usr/bin/env node
import * as process from "process";
import { createInterface, ReadLineOptions } from "readline";
import Movement from "./movement";
const robotController = new Movement();

const rlOptions: ReadLineOptions = {
  input: process.stdin,
  output: process.stdout,
  terminal: false,
};

process.stdout.write(
  `Valid commands: PLACE, LEFT, RIGHT, MOVE, REPORT. Size of the table is 5x5.
PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
Example of PLACE: PLACE 0,0,NORTH\n`
);

const rl = createInterface(rlOptions);

rl.prompt(true);

rl.on("line", (line: string) => {
  robotController.execute(line);
  rl.prompt(true);
});
