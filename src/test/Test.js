// var MaxQueue = function () {
//   this.items = {}
//   this.count = 0
//   this.lowestCount = 0
//   this.maxValue = { 0: -1 }
// }
//
// MaxQueue.prototype.max_value = function () {
//   return this.maxValue[0]
// }
//
// MaxQueue.prototype.push_back = function (value) {
//   if (this.isEmpty()) {
//     this.maxValue[0] = value
//     this.maxValue[value] = value
//   } else {
//     this.maxValue[0] = Math.max(this.maxValue[0], value)
//   }
//   this.items[this.count] = value
//   this.count++
// }
//
// MaxQueue.prototype.pop_front = function () {
//   if (this.isEmpty()) return -1
//   else {
//     let r = this.items[this.lowestCount]
//     this.lowestCount++
//     return r
//   }
// }
//
// MaxQueue.prototype.isEmpty = function () {
//   return this.count === this.lowestCount
// }
var MaxQueue = function () {
  this.queue1 = []
  this.queue2 = []
}

MaxQueue.prototype.max_value = function () {
  if (this.queue1.length !== 0) {return this.queue2[0]} else return -1
}

MaxQueue.prototype.push_back = function (value) {
  if (this.queue1.length) {
    while (value > this.queue2[this.queue2.length - 1] && this.queue2) {
      this.queue2.pop()
    }
  }
  this.queue1.push(value)
  this.queue2.push(value)
}

MaxQueue.prototype.pop_front = function () {
  if (this.queue1.length === 0) return -1
  else {
    let r = this.queue1.shift()
    if (r === this.queue2[0]) {
      this.queue2.shift()
    }
    return r
  }
}

let queue = new MaxQueue()
queue.push_back(1)
queue.push_back(2)
console.log(queue.max_value())
queue.pop_front()
console.log(queue.max_value())