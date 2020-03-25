'use strict';
/**
 * We can use the `class` keyword to describe the
 * properties of an object _before_ it is created.
 *
 * Classes have constructors that let us prepare the
 * properties when an `instance` of the class is created.
 *
 * We define two classes Rectangle and Circle, and
 * create instances of each.
 *
 * They are then drawn as before.
 */

// Define the properties and functions of a Rectangle
class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }
}

// Define the properties and functions of a circle
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
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
