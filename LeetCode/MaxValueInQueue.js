var MaxQueue = function () {
  this.items = {}
  this.count = 0
  this.lowestCount = 0
}

MaxQueue.prototype.max_value = function () {
  if (this.isEmpty()) return -1
  else {
    let max = this.items[this.lowestCount]
    for (let i = this.lowestCount; i < this.count; i++) {
      max = this.items[i] > max ? this.items[i] : max
    }
    return max
  }
}

MaxQueue.prototype.push_back = function (value) {
  this.items[this.count] = value
  this.count++
}

MaxQueue.prototype.pop_front = function () {
  if (this.isEmpty()) {return -1}
  else {
    let r = this.items[this.lowestCount]
    this.lowestCount++
    return r
  }
}
MaxQueue.prototype.isEmpty = function () {
  return this.count === this.lowestCount
}
let queue = new MaxQueue()
queue.push_back(2)
queue.push_back(-1)

let a = queue.max_value()
console.log(queue.pop_front())


