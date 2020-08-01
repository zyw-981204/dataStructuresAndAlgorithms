const Queue = class Queue {
  constructor () {
    this.count = 0
    this.item = {}
    this.lowestCount = 0
  }

  enqueue (element) {
    this.item[this.count] = element
    this.count++
  }

  dequeue () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.lowestCount]
      this.lowestCount++
      return r
    }
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    } else {
      let r = this.item[this.lowestCount]
      return r
    }
  }

  size () {
    return this.count - this.lowestCount
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.item = {}
  }

  toString () {
    let str = ''
    if (this.isEmpty()) {
      str = ''
    } else {
      for (let i = this.lowestCount; i < this.count; i++) {
        str += `,${this.item[i]}`
      }
      str = str.substr(1)
    }
    return str
  }
}
exports.Queue = Queue