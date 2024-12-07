/*
Problem: Implement a Delayed Printer
Create a function called delayedPrinter that takes a string and a delay time in milliseconds. 
The function should print the string to the console after the given delay.

Requirements:
The function should use setTimeout to achieve the delay.
If an empty string is provided, the function should immediately print "Nothing to print".
*/

function delayedPrinter(str, delay) {
    if(!str || str.length === 0){
        console.log("Nothing to print");
    }
    else {
        setTimeout(() =>console.log(str), delay)
    }
}

module.exports = delayedPrinter;
