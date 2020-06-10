function reverseString(str) {
    var revName = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revName += str[i];
    }
    return revName;
}

module.exports = reverseString;


