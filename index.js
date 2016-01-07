var Rectangle = require('./classes/Rectangle');

var rectangle = new Rectangle('Example Rectangle',5,6);
console.log(rectangle.getName());
console.log(rectangle.getWidth());

var Circle = require('./classes/Circle');

var circle = new Circle('Example Circle',5);
console.log(circle.getCircumference());
console.log(circle.getCircumferenceWithLimit(2));

circle.setRadius(1);

console.log(circle.getRadius());