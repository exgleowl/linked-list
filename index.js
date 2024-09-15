class Node {
  constructor(value, next) {
    this.value = value || null
    this.next = next || null
  }
}

export default class LinkedList {
  constructor() {
    this.HEAD = null
    this.LENGTH = 0
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.HEAD) {
      this.HEAD = newNode
    } else {
      let pointer = this.HEAD

      while (pointer.next) {
        pointer = pointer.next
      }
      pointer.next = newNode
    }
    this.LENGTH++
  }

  prepend(value) {
    if (!this.HEAD) {
      const newNode = new Node(value)
      this.HEAD = newNode
    } else {
      let nextNode = this.HEAD
      this.HEAD = new Node(value, nextNode)
    }
    this.LENGTH++
  }

  size() {
    return this.LENGTH
  }

  head() {
    return this.HEAD
  }

  tail() {
    if (!this.HEAD) {
      return null
    }

    let pointer = this.HEAD
    while(pointer.next) {
      pointer = pointer.next
    }
    return pointer
  }

  at(index) {
    if (index >= this.LENGTH) {
      return null
    }
    let pointer = this.HEAD
    for (let i = 1; i <= index; i++) {
      pointer = pointer.next
    }

    return pointer
  }

  pop() {
    if (!this.HEAD)
      return null

    if (this.LENGTH === 1) {
      this.HEAD = null
      return null
    }

    const pointer = this.at(this.LENGTH - 2)
    this.LENGTH--
    pointer.next = null
  }

  contains(value) {
    if (!this.HEAD)
      return false

    let pointer = this.HEAD
    while (pointer.next) {
      if (pointer.value === value)
        return true

      pointer = pointer.next
    }

    if (pointer.value === value)
      return true

    return false
  }

  find(value) {
    if (!this.HEAD) {
      return null
    }

    let pointer = this.HEAD
    for (let i = 0; i < this.LENGTH; i++) {
      if (pointer.value === value) {
        return i
      }
      pointer = pointer.next
    }
  }

  insertAt(value, index) {
    if (index > this.LENGTH)
      return null

    const prependNode = this.at(index-1)
    const nextNode = this.at(index)
    const newNode = new Node(value, nextNode)
    prependNode.next = newNode
  }

  removeAt(index) {
    if (!this.HEAD)
      return null

    const prependIndex = index === 0 ? 0 : index - 1

    if (prependIndex === 0) {
      this.HEAD = this.at(index+1)
      this.LENGTH--
    } else {
      const prependNode = this.at(prependIndex)
      const nextNode = this.at(index+1)
      prependNode.next = nextNode
      this.LENGTH--
    }

  }

  toString() {
    if (!this.HEAD)
      return null
    let pointer = this.HEAD
    let result = ''

    while(pointer.next) {
      result += `( ${pointer.value} ) -> `
      pointer = pointer.next
    }
    result += `( ${pointer.value} ) -> null`

    return result
  }
}
