"use strict";
/**
 * Use the class structure to define two types of
 * Object, the Rectangle and the Circle.
 *
 * Create Instances of each of these and draw the
 * picture as before.
 */

// Define the properties and functions of a Rectangle
class Rectangle {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }

  scale(s) {
    this.width *= s;
    this.height *= s;
  }

  moveBy(x,y) {
    this.x += x;
    this.y += y;
  }
}

// Define the properties and functions of a circle
class Circle {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  moveBy(x,y) {
    this.x += x;
    this.y += y;
  }
}

// Create circle and rectangle objects
const rectangle = new Rectangle(0,0,400,200);
const circle = new Circle(200,100,50);

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
