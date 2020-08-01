const utils = require('../utils/utils')
const defaultEquals = utils.defaultEquals
const Node = utils.node

exports.LinkedList = class LinkedList {
  constructor (equalFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalFn
  }

  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  getElementAt (index) {
    let result
    if (!this.isEmpty() && index >= 0 && index < this.count - 1) {
      result = this.head
      if (index > 0) {
        for (let i = 0; i < index; i++) {
          result = result.next
        }
      }
    } else {
      result = undefined
    }
    return result
  }

  removeAt (index) {
    let result
    if (!this.isEmpty()) {
      if (index === 0) {// 当链表只有一个头时
        result = this.head
        this.head = this.count > 1 ? this.head.next : this.head
      } else if (index > 0 && index < this.count) {
        let current = this.head, previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        result = current
      }
      this.count--
    } else {
      result = undefined
    }
    return result.value
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

}
