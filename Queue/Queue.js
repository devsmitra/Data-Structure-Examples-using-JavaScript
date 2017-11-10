class Queue {
  constructor(max) {
    this.queue = new Array(max);
    this.length = 0;
    this.max = max;
  }

  enqueue(data) {
    if (this.isFull()) {
      throw 'Queue is full';
    }
    this.queue[this.length] = data;
    this.length++;
    return data;
  }
  dequeue() {
    const data = this.peek();
    this.length--;
    for (let i = 0; i < this.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    return data;
  }

  peek() {
    if (this.isEmpty()) {
      throw 'Queue is empty';
    }
    return this.queue[0]
  }

  isFull() {
    return this.max == this.length;
  }

  isEmpty() {
    return 0 == this.length;
  }
}

// const stack = new Queue(10);
// stack.enqueue(1);
// stack.enqueue(2);
// stack.enqueue(3);

// console.log(stack.peek());
// console.log(stack.dequeue());
// console.log(stack.length);
// console.log(stack.peek());
// console.log(stack.dequeue());
// console.log(stack.length);
// console.log(stack.peek());

module.exports = Queue;