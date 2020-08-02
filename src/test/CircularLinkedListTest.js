const obj = require('../base/CircularLinkedList')
const CircularLinkedList = obj.CircularLinkedList
let list = new CircularLinkedList()
list.push(1)
list.removeAt(0)
console.log(list.toString())