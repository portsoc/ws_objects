"use strict";
/**
 * Move the classes to a separate file.
 */

import { Circle, Rectangle } from "./classes.mjs";

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
