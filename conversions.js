const convertToSec = (milliseconds) => {
    return milliseconds / 1000;
}
const convertToMin = (milliseconds) => {
    return milliseconds / (1000 * 60);
}
const convertToHours = (milliseconds) => {
    return milliseconds / (1000 * 60 * 60);
}
const convertToDays = (milliseconds) => {
    return milliseconds / (1000 * 60 * 60 * 24);
}
const convertToYears = (milliseconds) => {
    return milliseconds / (1000 * 60 * 60 * 24 * 365);
}

module.exports = {
    sec: convertToSec,
    min: convertToMin,
    hrs: convertToHours,
    days: convertToDays,
    years: convertToYears
}