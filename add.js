//add 4 numbers, given 1 of the number is a negative integer and 1 is a decimal
//subtract 2 numbers but always return a positive value (input number will always be a positive integer)
//multiply a given number by π and console the output
var num1 = 1;
var num2 = 2;
var num3 = 2.2222;
var num4 = -4;
console.log("ADD", num1 + num2 + num3 + num4);
console.log("Positive number", Math.abs(num2 - num1));
console.log("Multiply with pi", Math.PI * num1);

//given 2 numbers, find if the first number is "greater", "smaller" or "equal" to the second number.

if (num1 > num2) {
    console.log("Num1 is greater");
} else if (num1 < num2) {
    console.log("Num1 is smaller");
} else {
    console.log("Equal");
}


