'use strict';
/**
 * We can use the `class` keyword to describe the
 * properties of an object _before_ it is created.
 *
 * Classes have constructors that let us prepare the
 * properties when an `instance` of the class is created.
 *
 * We define two a `Rectangle` class and create two
 * instances of it.
 *
 * They are then drawn as before.
 */

// Define the properties and functions of a Rectangle
class Rectangle {
  constructor(x, y, width, height, col) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.col = col;
  }
}

// draw a rectangle
function drawRect(c, r) {
  c.fillStyle = r.col;
  c.fillRect(r.x, r.y, r.width, r.height);
}

// Create circle and rectangle objects
const rect = new Rectangle(100, 50, 100, 200, 'crimson');
const anotherRect = new Rectangle(300, 150, 100, 200, 'steelblue');

// get a handle on the drawing canvas
const ctx = document.querySelector('canvas').getContext('2d');

drawRect(ctx, rect);
drawRect(ctx, anotherRect);
