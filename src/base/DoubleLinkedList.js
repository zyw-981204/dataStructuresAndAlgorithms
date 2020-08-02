const utils = require('../utils/utils')
const DoubleNode = utils.DoubleNode
const LinkedListObj = require('./LinkedList')
const LinkedList = LinkedListObj.LinkedList
exports.DoubleLinkedList = class DoubleLinkedList extends LinkedList {
  constructor () {
    super()
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

  // insert (element, index) {
  //   const node = new DoubleNode(element)
  //   if (index < this.count && index >= 0) {
  //     if (index === 0) {
  //       if (this.count === 0) {
  //         this.push(node)
  //       } else {
  //         node.next = this.head
  //         this.head.previous = node
  //         this.head = node
  //       }
  //     } else if (index === this.count - 1) {
  //       node.next = this.tail
  //       node.previous = this.tail.previous
  //       this.tail.previous = node
  //     } else {
  //       let current
  //       if (index < this.count / 2) {
  //         current = this.head
  //         for (let i = 0; i < index; i++) {
  //           current = current.next
  //         }
  //       } else {
  //         current = this.tail
  //         for (let i = this.count; i > index; i--) {
  //           current = current.previous
  //         }
  //       }
  //         node.previous = current.previous
  //         node.next = current
  //         current.previous.next = node
  //         current.previous = node
  //     }
  //     this.count++
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element)
      let current
      if (index === 0) {
        if (this.head == null) {
          this.push(node)
        } else {
          this.head.previous = node
          node.next = this.head
          this.head = node
        }
      } else if (index === this.count) {
        this.tail.next = node
        node.previous = this.tail
        this.tail = node
      } else {
        current = this.getElementAt(index)
        node.previous = current.previous
        node.next = current
        current.previous.next = node
        current.previous = node
      }
      this.count++
      return true
    } else {
      return false
    }
  }

  removeAt (index) {
    if (!this.isEmpty() && index >= 0 && index < this.count - 1) {
      let current, previous, next, result
      if (index === 0) {
        result = this.head
        if (this.count === 1) {
          this.head = null
          this.tail = null
        } else {
          current = this.head.next
          current.previous = null
          this.head = current
        }
        //if (this.count === 1 && index === 0) {
        //         result = this.head
        //         this.head = null
        //         this.tail = null
        //       } else if (index === 0) {
        //         result = this.head
        //         current = this.head.next
        //         current.previous = null
        //         this.head = current
        //       }
      } else if (index === this.count - 1) {
        result = this.tail
        current = this.tail.previous
        this.tail.previous = null
        current.next = null
        this.tail = current
      } else {
        result = this.getElementAt(index)
        previous = this.getElementAt(index - 1)
        next = this.getElementAt(index + 1)
        previous.next = next
        next.previous = previous
      }
      this.count--
      return result
    } else {
      return undefined
    }
  }

  indexOf (element, fromIndex = 0) {
    fromIndex = fromIndex >= 0 ? fromIndex : (this.count + fromIndex)
    if (fromIndex < this.count) {
      let current, resultIndex = -1// 初始化curren
      // t 和返回结果
      for (let i = fromIndex; i < this.count; i++) {
        current = this.getElementAt(i)// 获取开始位置的元素
        if (element === current.element) {
          resultIndex = i// 如果匹配成功 则返回
          break
        }
      }
      return resultIndex
    } else {
      return -1
    }
  }

  getHead () {
    return this.head.element
  }

  getTail () {
    return this.tail.element
  }

  clear () {
    if (this.isEmpty()) {
      return true
    } else {
      this.head = null
      this.tail = null
      this.count = 0
    }
  }
  // toString (isReserve) {
  //   let str = ''
  //   isReserve = isReserve || false
  //   if (!this.isEmpty()) {
  //     if (isReserve) {
  //       for (let i = this.count - 1; i >= 0; i--) {
  //         str += `,${this.getElementAt(i).element}`
  //       }
  //     } else {
  //       for (let i = 0; i < this.count; i++) {
  //         str += `,${this.getElementAt(i).element}`
  //       }
  //     }
  //     str = str.substr(1)
  //   }
  //   return str
  // }
}
