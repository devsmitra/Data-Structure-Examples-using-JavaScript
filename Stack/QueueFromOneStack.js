const Stack = require('./Stack');

const stack = new Stack(4);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

var dequeueFIFO = () => {
  if (!stack.isEmpty()) {
    let popInt = stack.pop();
    console.log('popInt', popInt);
    if (!stack.isEmpty()) {
      dequeueFIFO();
      console.log('if', popInt);
      stack.push(popInt);
    }
  }
}
dequeueFIFO();

console.log(stack.peek());
// console.log(stack.pop());