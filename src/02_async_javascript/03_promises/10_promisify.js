/*
Problem: Implement a Promisify Function
Create a function called promisify that takes a node-style callback-based function 
as an argument and returns a new function that returns a Promise.

Requirements:
The input function follows the node-style callback pattern: 
(arg1, arg2, ..., callback) => void 
where callback is of the form:
(error, result) => void


The returned function should return a Promise that resolves with the result if 
the original function calls its callback with null as the first argument.
The Promise should reject with the error if the original function calls 
its callback with an error.
*/

// See how promisify works here: https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
// Implement your own version of it bellow(senior interview question):

function promisify(nodeStyleFunction) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            nodeStyleFunction(...args, (error, result) => {
                if (error){
                    reject(error)}
                    else{
                        resolve(result)
                    }
                })
            })
        }
    }

module.exports = promisify;
