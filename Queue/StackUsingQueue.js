const Queue = require('./Queue');

const queue1 = new Queue(3);
const queue2 = new Queue(3);

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

let first = queue1.dequeue();
let queue2Length = 0;

while (first) {
  queue2Length++;
  queue2.enqueue(first);
  let length = queue2Length;
  while (length > 1) {
    queue2.enqueue(queue2.dequeue());
    length--;
  }

  if (queue1.isEmpty()) {
    break;
  }
  first = queue1.dequeue();
}

console.log(queue2.queue);