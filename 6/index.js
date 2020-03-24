"use strict";
/**
 * Refactor the Rectangle and Circle classes, takling the
 * common properties and functions and moving them to a
 * new superclass called Shape.
 */

class Shape {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  moveBy(x,y) {
    this.x += x;
    this.y += y;
  }
}

// Define the properties and functions of a Rectangle
class Rectangle extends Shape {
  constructor(x,y,w,h) {
    super(x,y);
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
  constructor(x,y,r) {
    super(x,y);
    this.r = r;
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
