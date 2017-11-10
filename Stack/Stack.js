class Stack {
  constructor(top) {
    this.top = 0;
    this.max = top;
    this.stack = new Array(top);
  }

  push(data) {
    if (this.isFull()) {
      throw 'Stack is Full';
    }
    this.stack[this.top] = data;
    this.top++;
    return data;
  }

  peek() {
    const data = this.peek();
    this.top--;
    return data;
  }

  pop() {
    if (this.isEmpty()) {
      throw 'Stack is Empty';
    }
    this.top--;
    return this.stack[this.top];;
  }

  isFull() {
    return this.max == this.top;
  }

  isEmpty() {
    return 0 == this.top;
  }
}
// const stack = new Stack(10);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.peek());
// console.log(stack.pop());

module.exports = Stack;