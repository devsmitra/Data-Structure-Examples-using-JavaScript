const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

class QueueUsingLinkedList {
  constructor(linkedList) {
    this.linkedList = Object.assign({}, linkedList);
  }

  enqueue(value) {
    const node = {
      value,
      next: null
    };
    let currentNode = this.linkedList.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return value;
  }

  dequeue() {
    let currentNode = this.linkedList.head;
    if (currentNode) {
      this.linkedList.head = currentNode.next;
      return;
    }
    throw 'Queue is Empty.'
  }

  display() {
    console.log('-------------');
    let currentNode = this.linkedList.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const queue = new QueueUsingLinkedList(linkedList);
queue.enqueue(5);
queue.enqueue(6);
queue.display();
queue.dequeue();
queue.display();