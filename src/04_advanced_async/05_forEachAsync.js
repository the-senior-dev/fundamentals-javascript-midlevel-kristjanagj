/* Problem: Implement forEachAsync
You're tasked with implementing a function called forEachAsync that behaves 
like the array forEach method but accepts an asynchronous callback function.

Requirements:
- the function should take an array and an asynchronous callback function as arguments
- the function should execute the callback function for each element in the array, in order, 
and wait for each callback to execute before moving on to the next.
- the callback function should be called with the current element, its index, and the original array.
- the function should return a promise that resolves when all callbacks have completed.
*/

async function forEachAsync(array, callback) {
    const result = []
    for (let i=0; i < array.length; i++) {
        const clbResult = await callback(array[i], i, array);
        result.push(clbResult)
    }
    return result
}

module.exports = forEachAsync; 
