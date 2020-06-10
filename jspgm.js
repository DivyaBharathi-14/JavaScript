//console the factorial of a given number
var num = 5;
var fact = 1;
for (let i = 1; i <= 5; i++) {
    fact *= i;
}
console.log(fact);

//console "pong" if given input string is "ping", "boop" if given string is "beep", "ping pong! beep boop" for any other string

var name = " "
if (name == "ping") {
    console.log("pong");
} else if (name == "beep") {
    console.log("boop");
} else {
    console.log("ping pong! beep boop");
}