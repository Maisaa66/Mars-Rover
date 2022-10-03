/**
 * Do not forget to install the dependencies
 * npm install prompt-sync
 */

const input = require("prompt-sync")({ sigint: true });


/**
 * Rover Object Goes Here
 * ======================
@param {number} x - x coordinate of the rover 
@param {number} y - y coordinate of the rover
@param {string} direction - direction of the rover (N, S, E, W) 
@function turnLeft - turns the rover left
@function turnRight - turns the rover right
@function moveForward - moves the rover forward
@function moveBackward - moves the rover backward
 */

class marsRover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }


  moveForward() {
    switch (this.direction) {
      case "N":
        this.y++;
        break;
      case "E":
        this.x++;
        break;
      case "S":
        this.y--;
        break;
      case "W":
        this.x--;
        break;
    }
  }
  moveBackward() {
    switch (this.direction) {
      case "N":
        this.y--;
        break;
      case "E":
        this.x--;
        break;
      case "S":
        this.y++;
        break;
      case "W":
        this.x++;
        break;
    }
  }
  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
    }
  }
  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
  }
  printPosition() {
    console.log(`The rover is at position ${this.x}, ${this.y} facing ${this.direction}`);
  }
}


const [x, y, direction] = input("Enter the starting position of the rover: ").split(" ");
const rover = new marsRover(parseInt(x), parseInt(y), direction);
const commands = input("Enter the commands for the rover: ").split("");
for (let command of commands) {
    switch (command) {
        case "F":
            rover.moveForward();
            break;
        case "B":
            rover.moveBackward();
            break;
        case "L":
            rover.turnLeft();
            break;
        case "R":
            rover.turnRight();
            break;
    }
}

rover.printPosition();

// // // // Language: javascript
// // // // Path: rover.test.js
// const marsRover = require("./rover");

// test("rover moves forward", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveForward();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(1);
//     expect(rover.direction).toBe("N");
// });

// test("rover moves backward", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveBackward();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(-1);
//     expect(rover.direction).toBe("N");
// });

// test("rover turns left", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.turnLeft();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(0);
//     expect(rover.direction).toBe("W");
// });

// test("rover turns right", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.turnRight();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(0);
//     expect(rover.direction).toBe("E");
// });

// test("rover moves forward and backward", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveForward();
//     rover.moveBackward();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(0);
//     expect(rover.direction).toBe("N");
// });

// test("rover turns left and right", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.turnLeft();
//     rover.turnRight();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(0);
//     expect(rover.direction).toBe("N");
// });

// test("rover moves forward and turns left", () => { 
//     const rover = new marsRover(0, 0, "N");
//     rover.moveForward();
//     rover.turnLeft();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(1);
//     expect(rover.direction).toBe("W");
// });

// test("rover moves forward and turns right", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveForward();
//     rover.turnRight();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(1);
//     expect(rover.direction).toBe("E");
// });

// test("rover moves backward and turns left", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveBackward();
//     rover.turnLeft();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(-1);
//     expect(rover.direction).toBe("W");
// });

// test("rover moves backward and turns right", () => {
//     const rover = new marsRover(0, 0, "N");
//     rover.moveBackward();
//     rover.turnRight();
//     expect(rover.x).toBe(0);
//     expect(rover.y).toBe(-1);
//     expect(rover.direction).toBe("E");
// });
