
//find the current date
//find how many days more for Diwali
const oneDay = 24 * 60 * 60 * 1000;
var date = new Date();
var diwali = new Date(2020,10,15);
console.log("current Date",date);
console.log(diwali);
console.log("Days to be waited to celebrate Diwali",Math.round(Math.abs((date - diwali) / oneDay)));


//convert given number of milliseconds to seconds, minutes, hours, days and year

var milliseconds = 60000;
console.log("Seconds",milliseconds/1000)
console.log("Minutes",milliseconds/(1000*60))
console.log("Hours",milliseconds/(1000*60*60))
console.log("Days",milliseconds/(1000*60*60*24))
console.log("Year",milliseconds/(1000*60*60*24*365))