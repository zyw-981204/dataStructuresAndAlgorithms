const Queue = require('../base/queue')
const queue = Queue.Queue
let isQueue = new queue()
isQueue.enqueue(1)
isQueue.enqueue(2)
isQueue.enqueue(3)
isQueue.enqueue(4)
console.log(isQueue.toString())
isQueue.dequeue()
console.log(isQueue.toString())
isQueue.dequeue()
console.log(isQueue.toString())
