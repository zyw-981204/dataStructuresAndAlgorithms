const utils = require('../utils/utils')
const LinkedListObj = require('../base/LinkedList')
const Node = utils.node
let LinkedList = LinkedListObj.LinkedList

class CircularLinkedList extends LinkedList {
  constructor (head, count) {
    super(head, count)
  }

  push (element) {
    const node = new Node(element)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let current = this.getElementAt(this.size() - 1)
      current.next = node
      node.next = this.head
    }
    this.count++
  }

  insert (element, index) {
    let node = new Node(element)
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        if (this.count > 1) {
          node.next = this.head
        }
        this.head = node
      } else if (index === this.count) {
        let current = this.getElementAt(index - 1)
        current.next = node
        node.next = this.head
      } else {
        let previous, current
        previous = this.getElementAt(index - 1)
        current = this.getElementAt(index)
        previous.next = node
        node.next = current
      }
      this.count++
    }
  }

  removeAt (index) {
    let result, current, previous
    if (!this.isEmpty() && index >= 0 && index < this.count) {
      if (index === 0) {
        result = this.head
        this.head = this.count > 1 ? this.head.next : null // 看链表元素是否只有一个头
      } else if (index > 0) {
        previous = this.getElementAt(index - 1)
        current = this.getElementAt(index)
        result = current
        if (index === this.count - 1) {
          previous.next = this.head
        } else {
          previous.next = current.next
        }
      }
      this.count--
    } else {
      result = undefined
    }
    return result
  }
}

exports.CircularLinkedList = CircularLinkedList