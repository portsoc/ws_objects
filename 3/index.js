"use strict";
/**
 * We have a rectangle object, so this example
 * uses the properties of that object to draw it.
 */

// create an object using JSON
const rectangle = {
  width: 400,
  height: 200,
  scale: function(s) {
    this.width *= s;
    this.height *= s;
  }
}

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.append(canvas);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(0,0,rectangle.width, rectangle.height);

rectangle.scale(0.5);
ctx.fillStyle = "blue";
ctx.fillRect(0,0,rectangle.width, rectangle.height);

/**
 * To the rectangle object we add a circle
 * object.  The circle has an x and y position
 * as well as a radius (r).
 */

// create an object using JSON
const circle = {
  x: 200,
  y: 100,
  r: 50
}

ctx.fillStyle = "purple";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
