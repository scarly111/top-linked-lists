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
    const newNode = new Node(value)
    newNode.nextNode = this.head
    this.head = newNode         
  }

  size() {
    let count = 0
    let current = this.head
    while (current !== null) {
      count++
      current = current.nextNode
    }
    return count
  }

  headNode() {
    return this.head
  }

  tail() {
    let current = this.head
    if (current === null) return null

    while (current.nextNode !== null) {
      current = current.nextNode
    }
    return current
  }

}