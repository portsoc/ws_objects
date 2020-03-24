"use strict";
/**
 * Move the classes to a separate file.
 */

import { Circle, Rectangle } from "./classes.mjs";

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.append(canvas);

const ctx = canvas.getContext("2d");

// Create circle and rectangle objects
const rectangle = new Rectangle(0,0,400,200, "orange");
const circle = new Circle(200,100,50, "purple");
