const DeQueue = class DeQueue {
  constructor () {
    this.count = 0
    this.item = {}
    this.lowestCount = 0
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.item[this.lowestCount] = element
      this.count++
    } else if (this.lowestCount > 0) {
      for (let i = this.count; i >= this.lowestCount; i--) {
        this.item[i] = this.item[i - 1]
      }
      this.item[this.lowestCount] = element
      this.count++
    } else {
      for (let i = this.count; i > 0; i--) {
        this.item[i] = this.item[i - 1]
      }
      this.count++
      this.item[0] = element
      this.lowestCount = 0
    }
  }

  addBack (element) {
    this.item[this.count] = element
    this.count++
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.count - 1]
      this.count--
      return r
    }
  }

  peekFont () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.lowestCount]
      return r
    }
  }

  peekBack () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.count - 1]
      return r
    }
  }

  removeFont () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.lowestCount]
      this.lowestCount++
      return r
    }
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.item = {}
  }

  toString () {
    let str = ''
    if (this.isEmpty()) {
      str = '当前队列已空'
    } else {
      for (let i = this.lowestCount; i < this.count; i++) {
        str = `${str},${this.item[i]}`
      }
      str = str.substring(1)
    }
    return str
  }
}
exports.DeQueue = DeQueue