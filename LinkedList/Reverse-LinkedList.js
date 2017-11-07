const LinkedList = require('./LinkedList');
const linkList1 = new LinkedList();
linkList1.add(1);
linkList1.add(2);
linkList1.add(3);
linkList1.add(4);

let nodes = [];
let currentNode = linkList1.head;

while (currentNode) {
  nodes.push(currentNode);
  currentNode = currentNode.next;
}

const linkList2 = new LinkedList();
linkList2.head = nodes.pop();
currentNode = linkList2.head;

let node = nodes.pop();
while (node) {
  node.next = null;
  currentNode.next = node;
  currentNode = currentNode.next;
  node = nodes.pop();
}

console.log(JSON.stringify(linkList2, null, ' '));