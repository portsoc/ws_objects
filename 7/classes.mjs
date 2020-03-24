export class Shape {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  moveBy(x,y) {
    this.x += x;
    this.y += y;
  }
}

// Define the properties and functions of a Rectangle
export class Rectangle extends Shape {
  constructor(x,y,w,h) {
    super(x,y);
    this.width = w;
    this.height = h;
  }

  scale(s) {
    this.width *= s;
    this.height *= s;
  }
}

// Define the properties and functions of a circle
export class Circle extends Shape {
  constructor(x,y,r) {
    super(x,y);
    this.r = r;
  }
}
