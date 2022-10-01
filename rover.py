class marsRover:
    def __init__(self, x, y, direction):
        self.x = x
        self.y = y
        self.direction = direction
        self.directions = ['N', 'E', 'S', 'W']
        self.directionIndex = self.directions.index(self.direction)

    def forward(self):
        if self.direction == 'N':
            self.y += 1
        elif self.direction == 'E':
            self.x += 1
        elif self.direction == 'S':
            self.y -= 1
        elif self.direction == 'W':
            self.x -= 1
    def backward(self):
        if self.direction == 'N':
            self.y -= 1
        elif self.direction == 'E':
            self.x -= 1
        elif self.direction == 'S':
            self.y += 1
        elif self.direction == 'W':
            self.x += 1

    def turnLeft(self):
        self.directionIndex -= 1
        if self.directionIndex < 0:
            self.directionIndex = 3
        self.direction = self.directions[self.directionIndex]
    
    def turnRight(self):
        self.directionIndex += 1
        if self.directionIndex > 3:
            self.directionIndex = 0
        self.direction = self.directions[self.directionIndex]

    def __str__(self):
        return f'{self.x} {self.y} {self.direction}'
    

def main():
    x, y, direction = input("Enter your position: ").split()
    rover = marsRover(int(x), int(y), direction)
    commands = input()
    for command in commands:
        if command == 'F':
            rover.forward()
        elif command == 'B':
            rover.backward()
        elif command == 'L':
            rover.turnLeft()
        elif command == 'R':
            rover.turnRight()
    print(rover)
if __name__ == '__main__':
    main()

    

