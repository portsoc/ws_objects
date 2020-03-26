export class Shape {

  #x;
  #y;

  constructor(x, y, col) {
    this.#x = x;
    this.#y = y;
    this._col = col;
  }

  moveBy(x, y) {
    this.#x += x;
    this.#y += y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

}

// Define the properties and functions of a Rectangle
export class Rectangle extends Shape {
  constructor(x, y, width, height, col) {
    super(x, y, col);
    this._width = width;
    this._height = height;
  }

  draw(ctx) {
    ctx.fillStyle = this._col;
    ctx.fillRect(this.x, this.y, this._width, this._height);
  }

  get area() {
    return this._width * this._height;
  }

}

// Define the properties and functions of a circle
export class Circle extends Shape {
  constructor(x, y, r, col) {
    super(x, y, col);
    this._r = r;
  }

  draw(ctx) {
    ctx.fillStyle = this._col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this._r, 0, 2 * Math.PI);
    ctx.fill();
  }

  get area() {
    return Math.PI * this._r ** 2;
  }

}
