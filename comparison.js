const compare = (num1, num2) => {
    if (num1 > num2) {
        console.log("Num1 is greater");
    } else if (num1 < num2) {
        console.log("Num1 is smaller");
    } else {
        console.log("Equal");
    }
}

module.exports = compare;