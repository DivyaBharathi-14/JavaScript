//console the reverse of a given string
function reverseString(str) {
    var revName = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revName += str[i];
    }
    return revName;
}

let name = "divya";
console.log("Reverse of divya", reverseString(name));
