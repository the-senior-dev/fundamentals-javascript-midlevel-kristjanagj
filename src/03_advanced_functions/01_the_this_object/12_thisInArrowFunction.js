/*
Understanding 'this' in Arrow Functions:
Create a function called exploreThisInArrowFunction that accepts two functions: 
- one arrow function
- one regular function

Inside exploreThisInArrowFunction, declare an object with a name property. 
Assign both functions as methods to the object and invoke them. 
Return an array containing the this.name values accessed by each function.

Requirements:
- both the arrow function and the regular function should return this.name
- create an object within exploreThisInArrowFunction that has a name property
- assign both functions as methods to this object
- invoke both methods and collect their results
- return an array of the two results
*/

function exploreThisInArrowFunction(arrowFunc, regularFunc) {
    const obj = {
        name: "Kristi",
        arrowFunc,
        regularFunc
    }
    return [obj.arrowFunc(), obj.regularFunc()]
}

module.exports = exploreThisInArrowFunction;
