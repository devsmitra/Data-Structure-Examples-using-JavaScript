function CircularLinkedList() {
  this.head;
  this.count = 0;

  var tail;
  this.add = (value) => {
    var node = {
      value: value,
      next: this.head
    };
    if (this.count === 0) {
      this.head = {};
      this.head.value = value;
      this.head.next = this.head;
      tail = this.head;
    } else {
      tail.next = node;
      tail = node;
    }
    this.count++;
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
circularLinkedList.findCircular()
module.exports = CircularLinkedList;