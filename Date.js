
const days = (diwali) => {
    const oneDay = 24 * 60 * 60 * 1000;
    var date = new Date();
    return Math.round(Math.abs((date - diwali) / oneDay));
}

module.exports = days;