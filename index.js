const square = require('./square');
const circle = require('./circle');
const rectangle = require('./rectangle');
const triangle = require('./triangle');
const cylinder = require('./cylinder');
const add = require('./add');
const multiply = require('./multiplyWithPI');
const sub = require('./PositiveResult');
const fact = require('./factorial');
const reverse = require('./reverse');
const message = require('./message');
const compare = require('./comparison');
const convert = require('./conversions');
const days = require('./Date');

console.log("Addition of 3,-5,1.11,5 is", add([3, 5, -5, 1.11]));
console.log("Positive Result", sub(5, 10));
console.log("Multiply 3 with Pi results", multiply(3));
console.log("Area of Square", square(9));
console.log("Area of circle", circle(5));
console.log("Area of Rectangle", rectangle(5, 4));
console.log("Area of Triangle", triangle(3, 2));
console.log("Area of cylinder", cylinder(1, 2));
console.log("Factorial of 5 is", fact(5));
console.log("Reverse of Divya is", reverse("divya"));
console.log("Print....", message(""));
console.log("compare 3 and 4", compare(3, 4));
console.log("Covert ms to sec", convert.sec(10000));
console.log("Covert ms to min", convert.min(10000000));
console.log("Covert ms to hrs", convert.hrs(100000000));
console.log("Covert ms to days", convert.days(1000000000));
console.log("Covert ms to years", convert.years(100000000000));
console.log("Today's Date", new Date());
console.log("Days to be waited to celebrate Diwali", days(new Date(2020, 10, 15)));









