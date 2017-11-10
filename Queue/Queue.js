class Queue {
  constructor(max) {
    this.queue = new Array(max);
    this.top = 0;
    this.max = max;
  }

  enqueue(data) {
    if (this.isFull()) {
      throw 'Queue is full';
    }
    this.queue[this.top] = data;
    this.top++;
    return data;
  }
  dequeue() {
    const data = this.peek();
    this.top--;
    for (let i = 0; i < this.top; i++) {
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
    return this.max == this.top;
  }

  isEmpty() {
    return 0 == this.top;
  }
}

module.exports = Queue;