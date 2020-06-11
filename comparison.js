const compare = (num1, num2) => {
    if (num1 > num2) {
        return "Num1 is greater";
    } else if (num1 < num2) {
        return "Num1 is smaller";
    } else {
        return "Equal";
    }
}

module.exports = compare;