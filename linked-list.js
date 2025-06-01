class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      // if the list is empty, make the new node the head
      this.head = newNode
      return
    }

    let current = this.head
    while (current.nextNode !== null) {
      current = current.nextNode
    }

    current.nextNode = newNode
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head; 
    this.head = newNode;          
  }

}