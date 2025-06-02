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

  at(index) {
    if (index < 0) return null

    let current = this.head
    let count = 0

    while (current !== null) {
      if (count === index) return current
      current = current.nextNode
      count++
    }

    // if index not exist
    return null
  }

  pop() {
    if (this.head === null) return // check if list is empty

    if (this.head.nextNode === null) {
      // if there is only one value
      this.head = null
      return
    }

    let current = this.head
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode
    }

    current.nextNode = null // pop
  }

  toString() {
    let current = this.head
    let result = ''

    while (current !== null) {
      result += `( ${current.value} ) -> `
      current = current.nextNode
    }

    result += 'null'
    return result
  }
}

module.exports = LinkedList