# Mars Rover Problem

- [x] Python
- [x] Javascript

## Table of contents
* [About the problem](#About-the-problem)
* [Libraries](#libraries)
* [Setup](#setup)
* [Input and Output](#input-and-output)
<!-- * [Code Architecture](#code-architecture) -->

## About the problem

- You are part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.
When the rover touches down on Mars, it is initialised with it’s current coordinates and the direction it is facing. These could be any coordinates, supplied as arguments (x, y, direction) e.g. (4, 2, EAST).

> As Mars is a globe, there is no ‘Edge of the world’ to fall off, so negative coordinates are valid.

## Libraries

| Library |  vesion  |
| :------ | :------: |
| node  | 16.14.0. |
| python   |  3.10.2  |
| prompt-sync    |    4.2.0     |

## Setup
### Javascript setup
```
$ npm install prompt-sync
$ node rover.js
```

### Python setup
```
$ python rover.py
```
### Input and Output

### Test Input:
```
4 2 E
FLFFFRFLB
```
### Expected Output:
```
The rover is at position 6, 4 facing N
```
