console.log("number");

let first = document.getElementById("first").innerHTML;
console.log(first);

let second = document.getElementById("second").innerHTML;
console.log(second);


// convert the string into number 
console.log(parseInt(first) + parseInt(second)); 

// control the number of digits after decimal 
let fixxed = 1134.68546;
console.log(fixxed.toFixed(2));


let precied = 90.9;
// precied =90;
console.log(precied.toPrecision(2));

let dates = new Date("02/13/2023");
let month = dates.getMonth() + 1;
//date set method is not stored in variable //value not return

dates.setDate(15);
dates.setFullYear(15);

console.log(dates);

if (month > 1) {
    console.log("month is greter than 1");
}
else {
   console.log("month is not valid");
}
