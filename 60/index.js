'use strict';
/**
 * Refactor the `Rectangle` and `Circle` classes, taking the
 * common properties and functions and moving them to a
 * new _superclass_ called `Shape`.
 */


// // Define the properties and functions of a circle
// class Circle extends Shape {
//   constructor(x, y, r) {
//     super(x, y);
//     this.r = r;
//   }
// }

'use strict';
/**
 * We add a `Circle` class to complement our `Rectangle`.
 * The circle has an `x` and `y` position as wel
 * as a radius (`r`).
 */


class Shape {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
  }

}


// Define the properties and functions of a Rectangle
class Rectangle extends Shape {
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


// Define the properties and functions of a circle
class Circle extends Shape {
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

// Create circle and rectangle objects
const rect1 = new Rectangle(100, 50, 100, 200, 'crimson');
const rect2 = new Rectangle(300, 150, 100, 200, 'steelblue');
const circ1 = new Circle(150, 350, 50, `crimson`);
const circ2 = new Circle(350, 450, 50, `steelblue`);

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

rect1.draw(ctx);
rect2.draw(ctx);
circ1.draw(ctx);
circ2.draw(ctx);
