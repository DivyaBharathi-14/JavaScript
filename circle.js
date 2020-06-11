const circle = (radius) => {
    return Math.PI * radius * radius;
}

module.exports = circle;

console.assert(circle(5) == 78.53981633974483);
//console.assert(circle(5) == 7.53981633974483);
