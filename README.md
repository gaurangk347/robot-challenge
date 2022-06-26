# Robot Challenge

## Installing required for the project

Node.js: https://nodejs.org/en/download/

## How to run?

We can use either npm or yarn to run the project.

- npm is installed with Node by default
- yarn: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

Once the setup is done, run

```shell
$ yarn
$ yarn start
```

### OR

```shell
$ npm
$ npm start
```

## Testing

This solution uses `Jest` as the testing libray.

```shell
$ npm test
or
$yarn test
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
