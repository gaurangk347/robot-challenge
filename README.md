# Robot Challenge

## Installation required for the project

Node.js: https://nodejs.org/en/download/

## How to run?

Use either npm or yarn to run the project.

- npm is installed with Node by default
- yarn: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

Once the setup is done, run

```shell
$ yarn
$ yarn start
or
$ npm
$ npm start
```

After running the command wait till you get below info text before giving any input,

`Valid commands: PLACE, LEFT, RIGHT, MOVE, REPORT. Size of the table is 5x5. PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. Example of PLACE: PLACE 0,0,NORTH`

## Testing

This solution uses `Jest` as the testing libray.

```shell
$ yarn test
or
$ npm test
```

## Test data

```plain
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```

```plain
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```plain
PLACE    // if placing cords are not provided, it will take 0,0,NORTH
MOVE
RIGHT
MOVE
REPORT
Output: 1,1,WEST
```
