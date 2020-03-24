/**
 * This program creates a basic object, logs is,
 * changes it and then logs it again.
 */

// create an object using JSON
const rectangle = {
  width: 16,
  height: 9
}

console.log(rectangle);
rectangle.width = 160;
rectangle.height = 90;
console.log(rectangle);
