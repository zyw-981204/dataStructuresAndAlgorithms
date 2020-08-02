const LinkedListObj = require('./LinkedList')
const LinkedList = LinkedListObj.LinkedList
const DoubleLinkedListObj = require('./DoubleLinkedList')
const DoubleLinkedList = DoubleLinkedListObj.DoubleLinkedList

// 使用单向链表来实现栈
// class StackLinkedList {
//   constructor () {
//     this.items = new LinkedList()
//   }
//
//   push (element) {
//     this.items.push(element)
//     return true
//   }
//
//   pop () {
//     return this.items.removeAt(this.items.size() - 1)
//   }
//
//   peek () {
//     return this.items.getElementAt(this.items.size() - 1).element
//   }
//
//   toString (isReverse) {
//     return this.items.toString(isReverse)
//   }
// }

// 利用双向链表创建数组
class StackLinkedList {
  constructor () {
    this.items = new DoubleLinkedList()
  }

  push (element) {
    this.items.push(element)
    return true
  }

  pop () {
    return this.items.removeAt(this.items.size() - 1)
  }

  peek () {
    return this.items.getTail()
  }
  size(){
    return this.items.size()
  }
  isEmpty(){
    return this.items.isEmpty()
  }
  clear(){
    return this.items.clear()
  }
  toString (isReverse) {
    return this.items.toString(isReverse)
  }
}

exports.StackLinkedList = StackLinkedList