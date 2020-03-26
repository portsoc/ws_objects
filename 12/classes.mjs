export class Shape {
  constructor(x, y, col) {
    this._x = x;
    this._y = y;
    this._col = col;
  }

  moveBy(x, y) {
    this._x += x;
    this._y += y;
  }

  get x() {
    return this._x;
  }

  set x(val) {
    this._x = val;
  }

  get area() {
    throw new Error('area is not a property of this shape');
  }
}

export class Rectangle extends Shape {
  constructor(x, y, width, height, col) {
    super(x, y, col);
    this._width = width;
    this._height = height;
  }

  draw(ctx) {
    ctx.fillStyle = this._col;
    ctx.fillRect(this._x, this._y, this._width, this._height);
  }

  get area() {
    return this._width * this._height;
  }
}

export class Circle extends Shape {
  constructor(x, y, r, col) {
    super(x, y, col);
    this._r = r;
  }

  draw(ctx) {
    ctx.fillStyle = this._col;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._r, 0, 2 * Math.PI);
    ctx.fill();
  }

  get area() {
    return Math.PI * this._r ** 2;
  }
}