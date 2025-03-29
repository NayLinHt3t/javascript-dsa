//operation like constructor,push,unshift,insert all need to create a new node
//that why we define a node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
//{head:{value:10,next:null)}}
myLinkedList.push(5);
//{head:{value:10,next:{value:5,next:null}}}
console.log(myLinkedList);
