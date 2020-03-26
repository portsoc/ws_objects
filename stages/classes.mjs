export class Shape {
  #x;
  #y;
  #col;

  constructor(x, y, col) {
    this.#x = x;
    this.#y = y;
    this.#col = col;
  }

  get x() {
    return this.#x;
  }

  set x(val) {
    if (typeof val !== 'number') {
      throw new TypeError('x must be a number');
    }
    this.#x = val;
  }

  get y() {
    return this.#y;
  }

  get col() {
    return this.#col;
  }

  get area() {
    throw new Error('area is not a property of this shape');
  }

  moveBy(x, y) {
    this.#x += x;
    this.#y += y;
  }
}

export class Rectangle extends Shape {
  #width;
  #height;

  constructor(x, y, width, height, col) {
    super(x, y, col);
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.width * this.height;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export class Circle extends Shape {
  #r;

  constructor(x, y, r, col) {
    super(x, y, col);
    this.#r = r;
  }

  get r() {
    return this.#r;
  }

  get area() {
    return Math.PI * this.r ** 2;
  }

  draw(ctx) {
    ctx.fillStyle = this.col;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
