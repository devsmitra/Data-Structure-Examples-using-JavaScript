function DoublyLinkedList() {
  this.length = 0;
  this.head;

  this.add = (value) => {
    this.length++;
    let node = {
      prev: null,
      next: null,
      value
    }

    let currentNode = this.head;
    if (!currentNode) {
      this.head = node;
      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    node.prev = currentNode;
    currentNode.next = node;
  }

  this.remove = (val) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == val) {
        const prev = currentNode.prev;
        const next = currentNode.next;

        prev.next = next;
        next.prev = prev;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  this.addAtPosition = (index, value) => {
    let currentNode = this.head;
    const node = {
      prev: null,
      next: null,
      value
    }
    let i = 0;
    while (currentNode) {
      if (index == i) {
        const prev = currentNode.prev;
        node.prev = prev;
        node.next = currentNode;
        currentNode.prev = node;
        prev.next = node;
        break;
      }
      i++;
      currentNode = currentNode.next;
    }
  }

  this.display = () => {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}


let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.display();

doublyLinkedList.remove(2);
doublyLinkedList.display();

doublyLinkedList.addAtPosition(1, 6);
console.log(doublyLinkedList.head);
doublyLinkedList.display();

module.exports = DoublyLinkedList;