const DeQueue = require('../base/deque')
const Deque = DeQueue.DeQueue
let isDeque = new Deque()
isDeque.addFront(1)
isDeque.addFront(2)
isDeque.addFront(3)
isDeque.addFront(4)
isDeque.addFront(5)
isDeque.addFront(6)
console.log(isDeque.item)
isDeque.removeFont()
isDeque.removeFont()
isDeque.removeBack()
let a = [1,2]
console.log(a.reverse())
console.log(isDeque.toString())

