/* Problem: Borrowing a Method with .call
Create a function called borrowMethod that borrows a method 
from one object and uses it on another object.

Requirements:
- there is an object called source with a method greet that 
takes a name argument and returns a greeting string like "Hello, [name]".
- there is another object called target that has a name property but 
lacks a greet method.
- create a function borrowMethod that takes no arguments but internally 
uses .call to apply the source.greet method to target and returns the greeting.
*/
function borrowMethod() {
    const source = {
      greet() {
        return `Hello, ${this.name}`;
      }
    };
  
    const target = {
      name: 'John'
    };
  
    // Borrow the greet method from source and use it for target
    // TODO: Implement this part
    return source.greet.call(target);
  }
  
  module.exports = borrowMethod;
  