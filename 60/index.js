'use strict';
/**
 * Refactor the `Rectangle` and `Circle` classes, taking the
 * common properties and functions and moving them to a
 * new _superclass_ called `Shape`.
 */

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }
}

// Define the properties and functions of a Rectangle
class Rectangle extends Shape {
  constructor(x, y, w, h) {
    super(x, y);
    this.width = w;
    this.height = h;
  }

  scale(s) {
    this.width *= s;
    this.height *= s;
  }
}

// Define the properties and functions of a circle
class Circle extends Shape {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }
}

// Create circle and rectangle objects
const rect = new Rectangle(100, 50, 100, 200);
const circle = new Circle(150, 300, 50);


// draw the rectangle
const ctx = document.querySelector('canvas').getContext('2d');
ctx.fillStyle = 'crimson';
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

// move the rectangle
rect.moveBy(200, 100);

// draw it again
ctx.fillStyle = 'steelblue';
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

// draw the circle
ctx.fillStyle = '#70A288';
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();

// move the circle
circle.moveBy(200, -200);

// draw the circle again
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();
