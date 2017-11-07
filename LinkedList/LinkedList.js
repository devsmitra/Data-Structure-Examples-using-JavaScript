function LinkList() {
  this.length = 0;
  this.head;
  let tail;
  this.add = (value) => {
    let currentNode = this.head;
    let node = {
      value,
      next: null
    }

    if (!currentNode) {
      this.head = node;
      this.length++;
      tail = this.head;
      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;

    /* In case of Remove Not Work */
    // tail.next = node;
    // tail = node;
    // this.length++;

    return node;
  }

  this.addAtPosition = (index, value) => {
    if (this.length <= index) {
      throw 'Out of Index.'
    }

    let currentNode = this.head;
    let i = 0;
    if (i == index) {
      this.head = {
        value,
        next: currentNode
      }
      return;
    }
    while (currentNode.next) {
      i++;
      if (index == i) {
        this.length++;
        let temp = currentNode.next;
        currentNode.next = {
          value,
          next: temp
        }
        break;
      }
    }
  }

  this.remove = (value) => {
    let currentNode = this.head;
    let prev;
    while (currentNode) {
      if (value == currentNode.value) {
        this.length--;
        const temp = currentNode.next;
        prev.next = temp;
        break;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
  }

  this.display = () => {
    console.log('-------------');
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const linkList1 = new LinkList();
linkList1.add(1);
linkList1.add(2);
linkList1.add(3);
linkList1.add(4);
linkList1.display();

linkList1.addAtPosition(0, 5);
linkList1.display();

linkList1.remove(2);
linkList1.display();

module.exports = LinkList;