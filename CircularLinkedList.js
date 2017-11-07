function CircularLinkedList() {
  this.head;
  this.count = 0;

  this.add = (value) => {
    this.count++;
    let node = {
      value: value,
      next: this.head
    };

    let currentNode = this.head;
    if (!currentNode) {
      this.head = node;
      node.next = this.head;
      return;
    }

    while (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  this.findCircular = () => {
    let currentNode = this.head;
    while (currentNode.next) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode == this.head) {
        console.log('LinkedList is Circular.');
        break;
      }
    }
  }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.add(1);
circularLinkedList.add(2);
circularLinkedList.add(3);
circularLinkedList.add(4);

console.log(circularLinkedList.head);
circularLinkedList.findCircular()

module.exports = CircularLinkedList;