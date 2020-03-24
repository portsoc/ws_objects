"use strict";
/**
 * Add x and y coordinates to the rectangle so
 * that it has the same positioning capabilitis
 * as the circle.
 *
 * Add a moveBy function to both the circle and
 * the rectangle.
 */

// create an object using JSON
const rectangle = {
  x: 0,
  y: 0,
  width: 400,
  height: 200,
  scale: function(s) {
    this.width *= s;
    this.height *= s;
  },
  moveBy: function(x,y) {
    this.x += x;
    this.y += y;
  }
}

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.append(canvas);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(rectangle.x,rectangle.y,rectangle.width, rectangle.height);

rectangle.scale(0.5);
ctx.fillStyle = "blue";
ctx.fillRect(rectangle.x,rectangle.y,rectangle.width, rectangle.height);
/**
 * To the rectangle object we add a circle
 * object.  The circle has an x and y position
 * as well as a radius (r).
 */

// create an object using JSON
const circle = {
  x: 200,
  y: 100,
  r: 50,
  moveBy: function(x,y) {
    this.x += x;
    this.y += y;
  }

}

ctx.fillStyle = "purple";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

circle.moveBy(100,0);
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

rectangle.moveBy(50,150);
ctx.fillStyle = "green";
ctx.fillRect(rectangle.x,rectangle.y,rectangle.width, rectangle.height);
