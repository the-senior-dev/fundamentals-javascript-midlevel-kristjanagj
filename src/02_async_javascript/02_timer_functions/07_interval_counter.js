/*
Create a function called startCounter that takes an integer n and a delay in milliseconds. 
The function should print integers starting from 1 up to n at each delay interval.

Requirements:
The function should use setInterval to print integers.
If n is less than 1, the function should immediately print "Invalid input".
*/
function startCounter(n, delay) {
    let counter=1;
    if (n<1) {
        console.log("Invalid value");
    } else {
        console.log(counter);
        counter++;
        const intervalId = setInterval(() => {
            if (counter > n) {
                clearInterval(intervalId)
            } else {
                console.log(counter);
                counter++;
            }
        }, delay)
    }  
}

module.exports = startCounter;
