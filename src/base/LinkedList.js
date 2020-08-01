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

  indexOf (element, fromIndex) {
    let result = -1
    fromIndex = fromIndex || 0
    if (fromIndex < 0 && -fromIndex <= this.count) {
      fromIndex = this.count + fromIndex
    }
    if (!this.isEmpty()) {
      for (let i = fromIndex; i < this.size(); i++) {
        if (this.getElementAt(i).value === element) {
          result = i
          break
        }
      }
    }
    return result
  }

  getElementAt (index) {
    let result
    if (!this.isEmpty() && index >= 0 && index <= this.count - 1) {
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
    let result, current, previous
    if (!this.isEmpty() && index >= 0 && index < this.count) {
      if (index === 0) {
        result = this.head
        this.head = this.count > 1 ? this.head.next : null // 看链表元素是否只有一个头
      } else if (index > 0) {
        previous = this.getElementAt(index - 1)
        current = this.getElementAt(index)
        result = current
        previous.next = current.next
      }
      this.count--
    } else {
      result = undefined
    }
    return result
  }

  remove (element) {
    if (!this.isEmpty() && this.indexOf(element) !== -1) {
      return this.removeAt(this.indexOf(element))
    }
    return undefined
  }

  insert (element, index) {
    let node = new Node(element)
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        if (this.count > 1) {
          node.next = this.head
        }
        this.head = node
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

  // removeAt (index) {
  //   let result
  //   if (!this.isEmpty()) {
  //     if (index === 0) {// 当链表只有一个头时
  //       result = this.head
  //       this.head = this.count > 1 ? this.head.next : this.head
  //     } else if (index > 0 && index < this.count) {
  //       let current = this.head, previous
  //       for (let i = 0; i < index; i++) {
  //         previous = current
  //         current = current.next
  //       }
  //       previous.next = current.next
  //       result = current
  //     }
  //     this.count--
  //   } else {
  //     result = undefined
  //   }
  //   return result.value
  // }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  toString () {
    let str = ''
    if (!this.isEmpty()) {
      for (let i = 0; i < this.count; i++) {
        let temp = this.getElementAt(i)
        str += `,${temp.value}`
      }
      str = str.substr(1)
    }
    return str
  }

}
