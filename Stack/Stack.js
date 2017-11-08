class Stack {
  constructor(length) {
    this.length = 0;
    this.max = length;
    this.stack = new Array(length);
  }

  push(data) {
    if (this.isFull()) {
      throw 'Stack is Full';
    }
    this.stack[this.length] = data;
    this.length++;
    return data;
  }

  peek() {
    const data = this.peek();
    this.length--;
    return data;
  }

  pop() {
    if (this.isEmpty()) {
      throw 'Stack is Empty';
    }
    this.length--;
    return this.stack[this.length];;
  }

  isFull() {
    return this.max == this.length;
  }

  isEmpty() {
    return 0 == this.length;
  }
}
// const stack = new Stack(10);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());

module.exports = Stack;