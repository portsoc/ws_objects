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
