export class Shape {
  constructor(x, y, col) {
    this._x = x;
    this._y = y;
    this._col = col;
  }

  get x() {
    return this._x;
  }

  set x(val) {
    if (typeof val !== 'number') {
      throw new TypeError('x must be a number');
    }
    this._x = val;
  }

  moveBy(x, y) {
    this._x += x;
    this._y += y;
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
}
