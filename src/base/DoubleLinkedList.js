const utils = require('../utils/utils')
const DoubleNode = utils.DoubleNode
const defaultEquals = utils.defaultEquals
const LinkedListObj = require('./LinkedList')
const LinkedList = LinkedListObj.LinkedList
exports.DoubleLinkedList = class DoubleLinkedList extends LinkedList {
  constructor (equalFn = defaultEquals) {
    super(equalFn)
    this.tail = undefined
  }

  push (element) {
    const node = new DoubleNode(element)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      node.previous = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.count++
  }

  insert (element, index) {
    const node = new DoubleNode(element)
    if (index < this.count && index >= 0) {
      if (index === 0) {
        if (this.count === 0) {
          this.push(node)
        } else {
          node.next = this.head
          this.head.previous = node
          this.head = node
        }
      } else if (index === this.count - 1) {
        node.next = this.tail
        node.previous = this.tail.previous
        this.tail.previous = node
      } else {
        let current
        if (index < this.count / 2) {
          current = this.head
          for (let i = 0; i < index; i++) {
            current = current.next
          }
        } else {
          current = this.tail
          for (let i = this.count; i > index; i--) {
            current = current.previous
          }
        }
        node.previous = current.previous
        node.next = current
      }
      this.count++
      return true
    } else {
      return false
    }
  }

  size () {
    return super.size()
  }

  isEmpty () {
    return super.isEmpty()
  }

  toString () {
    return super.toString()
  }
}