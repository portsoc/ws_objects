export class Shape {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }
}

// define the properties and functions of a Rectangle
export class Rectangle extends Shape {
  constructor(x, y, width, height, col) {
    super(x, y, col);
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// define the properties and functions of a circle
export class Circle extends Shape {
  constructor(x, y, r, col) {
    super(x, y, col);
    this.r = r;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
