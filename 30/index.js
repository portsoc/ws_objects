'use strict';
/**
 * To our familiar rectangle object we add a circle object.
 * The circle has an x and y position as well as a radius (r).
 */

// create an object
const rect = {
  x: 100,
  y: 50,
  width: 100,
  height: 200,
  moveBy: function (x, y) {
    this.x += x;
    this.y += y;
  },
};

// draw the rectangle
const ctx = document.querySelector('canvas').getContext('2d');
ctx.fillStyle = 'crimson';
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

// move the rectangle
rect.moveBy(200, 100);

// draw it again
ctx.fillStyle = 'steelblue';
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

// create the circle object
const circle = {
  x: 150,
  y: 300,
  r: 50,
};

ctx.fillStyle = '#70A288';
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();
