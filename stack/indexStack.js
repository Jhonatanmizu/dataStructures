const Stack = require("./stack");

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(3);
stack.push(2);
console.log(stack.peek());
stack.push(11);
console.log(stack.peek());
