/* Higher-Order Functions
Exercise: Create a Higher-Order Function named timeExecution
Your task is to create a higher-order function named timeExecution that takes 
a function as an argument and returns a new function. When the new function is called, 
it should measure the time taken for the argument function to execute 
and then return that time along with the result of the function.

Requirements:
- the function timeExecution should accept a function fn as its parameter.
- the returned function should accept any number of arguments.
- the returned function should measure the time before and after the function fn executes.
- the returned function should return an object containing two properties: { result: 7, time: 0.1234 }

Example:
const add = (a, b) => a + b;
const timedAdd = timeExecution(add);
const output = timedAdd(3, 4);
console.log(output); // Output should be something like { result: 7, time: 0.1234 }
*/

function timeExecution(fn) {
    return function(...args){
        const start =new Date ();
        const result = fn(...args);
        const time = new Date() - start;
        return{result, time}
    }
}


module.exports = timeExecution;